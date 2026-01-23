
# Careers Page Implementation Plan

## Overview
Create a new Careers page for AutoMSP that showcases company culture, benefits, and job openings relevant to the MSP/ServiceNow automation industry. This will resolve the current 404 error and fulfill the "View Open Positions" CTA on the About page.

## Page Structure

### 1. Hero Section
- Gradient background matching About page style
- Compelling headline: "Build the Future of MSP Automation"
- Subheadline about joining a mission-driven team

### 2. Why Work at AutoMSP Section
- Grid of 4-6 benefit cards with icons:
  - **Remote-First Culture** - Work from anywhere
  - **Cutting-Edge Technology** - Work with AI/ML and ServiceNow
  - **Growth Opportunities** - Learning budget and career development
  - **Competitive Compensation** - Equity, bonuses, and benefits
  - **Collaborative Team** - Small team, big impact
  - **Innovation Focus** - Shape the future of IT automation

### 3. Our Culture Section
- Values-driven content aligned with existing company values (MSP-First, Customer Obsessed, Continuously Learning)
- Team photo/illustration placeholder

### 4. Open Positions Section
- Static list of relevant positions for an MSP AI startup:
  - **ServiceNow Developer** - Full-time, Remote
  - **AI/ML Engineer** - Full-time, Remote
  - **Customer Success Manager** - Full-time, Remote
  - **Full Stack Developer** - Full-time, Remote
- Each position card shows: title, department, location, type
- "Apply Now" buttons (linked to Contact page for MVP)

### 5. No Matching Roles CTA
- Section for speculative applications
- "Don't see a role that fits?" message
- Link to contact form for general applications

### 6. CTA Section
- Matching style of other pages
- Encourage applications with "Join Our Team" message

## Technical Implementation

### Files to Create
1. `src/pages/Careers.tsx` - Main careers page component

### Files to Modify
1. `src/App.tsx` - Add route for `/careers`
2. `src/pages/About.tsx` - Update "View Open Positions" button to link to `/careers`

### Design Patterns to Follow
- Use `Header` and `Footer` components
- Match section styling from About and Contact pages
- Use `react-helmet-async` for SEO meta tags
- Apply `pt-24` padding for header offset
- Use existing Button variants (`hero`, `accent`, `outline`)
- Use lucide-react icons consistently
- Match color scheme (primary green, secondary accents)

### Job Categories (Industry-Relevant)
The positions will reflect roles typical for an AI-powered ServiceNow automation startup:
- **Engineering**: ServiceNow Developer, AI/ML Engineer, Full Stack Developer
- **Customer Success**: Customer Success Manager, Technical Support Engineer
- **Product**: Product Manager
- **Sales**: Account Executive

### Responsive Design
- Mobile-first approach
- Grid layouts that collapse on smaller screens
- Consistent spacing using Tailwind classes
