import { useEffect, useState, useRef } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { toast } from 'sonner';
import { Loader2, FileText, Download, Globe, Lock, Upload, Plus, Trash2 } from 'lucide-react';
import { format } from 'date-fns';

interface Document {
  id: string;
  title: string;
  description: string | null;
  file_url: string;
  file_type: string | null;
  file_size: number | null;
  is_public: boolean;
  created_at: string;
  user_id: string | null;
}

interface PortalDocumentsProps {
  userId: string;
}

export const PortalDocuments = ({ userId }: PortalDocumentsProps) => {
  const [documents, setDocuments] = useState<Document[]>([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const fetchDocuments = async () => {
    const { data, error } = await supabase
      .from('documents')
      .select('*')
      .or(`user_id.eq.${userId},is_public.eq.true`)
      .order('created_at', { ascending: false });

    if (error) {
      toast.error('Failed to load documents');
    } else {
      setDocuments(data || []);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (userId) {
      fetchDocuments();
    }
  }, [userId]);

  const formatFileSize = (bytes: number | null) => {
    if (!bytes) return 'Unknown size';
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(1024));
    return `${(bytes / Math.pow(1024, i)).toFixed(1)} ${sizes[i]}`;
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Limit file size to 10MB
      if (file.size > 10 * 1024 * 1024) {
        toast.error('File size must be less than 10MB');
        return;
      }
      setSelectedFile(file);
      if (!title) {
        setTitle(file.name.replace(/\.[^/.]+$/, ''));
      }
    }
  };

  const handleUpload = async () => {
    if (!selectedFile || !title.trim()) {
      toast.error('Please provide a title and select a file');
      return;
    }

    setUploading(true);

    try {
      // Upload file to storage
      const fileExt = selectedFile.name.split('.').pop();
      const fileName = `${userId}/${Date.now()}.${fileExt}`;

      const { error: uploadError } = await supabase.storage
        .from('documents')
        .upload(fileName, selectedFile);

      if (uploadError) throw uploadError;

      // Get signed URL for the file
      const { data: signedUrlData } = await supabase.storage
        .from('documents')
        .createSignedUrl(fileName, 60 * 60 * 24 * 365); // 1 year expiry

      if (!signedUrlData?.signedUrl) throw new Error('Failed to get file URL');

      // Save document metadata to database
      const { error: dbError } = await supabase
        .from('documents')
        .insert({
          user_id: userId,
          title: title.trim(),
          description: description.trim() || null,
          file_url: fileName, // Store path, not full URL
          file_type: selectedFile.type || null,
          file_size: selectedFile.size,
          is_public: false,
        });

      if (dbError) throw dbError;

      toast.success('Document uploaded successfully');
      setDialogOpen(false);
      setTitle('');
      setDescription('');
      setSelectedFile(null);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
      fetchDocuments();
    } catch (error: any) {
      console.error('Upload error:', error);
      toast.error(error.message || 'Failed to upload document');
    } finally {
      setUploading(false);
    }
  };

  const handleDelete = async (doc: Document) => {
    if (doc.user_id !== userId) {
      toast.error('You can only delete your own documents');
      return;
    }

    try {
      // Delete from storage
      const { error: storageError } = await supabase.storage
        .from('documents')
        .remove([doc.file_url]);

      if (storageError) throw storageError;

      // Delete from database
      const { error: dbError } = await supabase
        .from('documents')
        .delete()
        .eq('id', doc.id);

      if (dbError) throw dbError;

      toast.success('Document deleted');
      fetchDocuments();
    } catch (error: any) {
      console.error('Delete error:', error);
      toast.error(error.message || 'Failed to delete document');
    }
  };

  const getDownloadUrl = async (filePath: string) => {
    const { data } = await supabase.storage
      .from('documents')
      .createSignedUrl(filePath, 60 * 5); // 5 minute expiry for download
    return data?.signedUrl || filePath;
  };

  const handleDownload = async (doc: Document) => {
    // If file_url is a full URL (legacy), use it directly
    if (doc.file_url.startsWith('http')) {
      window.open(doc.file_url, '_blank');
      return;
    }
    
    // Otherwise get a signed URL
    const url = await getDownloadUrl(doc.file_url);
    window.open(url, '_blank');
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-heading font-bold">Documents</h2>
          <p className="text-muted-foreground">Access shared resources and upload your files</p>
        </div>
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              Upload Document
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Upload Document</DialogTitle>
              <DialogDescription>
                Upload a document or knowledge base article. Maximum file size is 10MB.
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="file">File</Label>
                <Input
                  id="file"
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileSelect}
                  accept=".pdf,.doc,.docx,.txt,.md,.xlsx,.xls,.ppt,.pptx,.csv"
                />
                {selectedFile && (
                  <p className="text-sm text-muted-foreground">
                    Selected: {selectedFile.name} ({formatFileSize(selectedFile.size)})
                  </p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Document title"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Description (optional)</Label>
                <Textarea
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Brief description of the document"
                  rows={3}
                />
              </div>
              <Button 
                onClick={handleUpload} 
                disabled={uploading || !selectedFile || !title.trim()}
                className="w-full"
              >
                {uploading ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Uploading...
                  </>
                ) : (
                  <>
                    <Upload className="w-4 h-4 mr-2" />
                    Upload
                  </>
                )}
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {documents.length === 0 ? (
        <Card>
          <CardContent className="flex flex-col items-center justify-center py-12">
            <FileText className="w-12 h-12 text-muted-foreground mb-4" />
            <h3 className="font-semibold text-lg">No documents available</h3>
            <p className="text-muted-foreground text-center mb-4">
              Upload your first document to get started.
            </p>
            <Button variant="outline" onClick={() => setDialogOpen(true)}>
              <Upload className="w-4 h-4 mr-2" />
              Upload Document
            </Button>
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {documents.map((doc) => (
            <Card key={doc.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <FileText className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold truncate">{doc.title}</h3>
                    {doc.description && (
                      <p className="text-sm text-muted-foreground line-clamp-2 mt-1">
                        {doc.description}
                      </p>
                    )}
                    <div className="flex items-center gap-2 mt-2 text-xs text-muted-foreground">
                      <span>{formatFileSize(doc.file_size)}</span>
                      <span>•</span>
                      <span>{format(new Date(doc.created_at), 'MMM d, yyyy')}</span>
                    </div>
                    <div className="flex items-center justify-between mt-3">
                      <Badge variant="secondary" className="text-xs">
                        {doc.is_public ? (
                          <>
                            <Globe className="w-3 h-3 mr-1" />
                            Public
                          </>
                        ) : (
                          <>
                            <Lock className="w-3 h-3 mr-1" />
                            Private
                          </>
                        )}
                      </Badge>
                      <div className="flex gap-1">
                        {doc.user_id === userId && (
                          <Button 
                            size="sm" 
                            variant="ghost" 
                            onClick={() => handleDelete(doc)}
                            className="text-destructive hover:text-destructive"
                          >
                            <Trash2 className="w-3 h-3" />
                          </Button>
                        )}
                        <Button size="sm" variant="outline" onClick={() => handleDownload(doc)}>
                          <Download className="w-3 h-3 mr-1" />
                          Download
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};
