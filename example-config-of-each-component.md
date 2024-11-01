## default colorScheme

```
{
  primaryColor: "purple-900",
  primaryBg: "purple-100",
  sectionBg: "white",
  textColor: "black",
  subduedTextColor: "text-gray-600",
  solidButtonHover: "purple-700",
  outlineButtonHover: "purple-200",
}
```

## createNavigation component

```
{
  logo: { src: `https://dummyimage.com/180x60/${getTailwindColor(colorScheme.primaryColor)}/ffffff&text=YourSITE`, alt: "YourSITE", href: "/" },
  links: [
    { text: "Services", href: "#services" },
    { text: "Process", href: "#process" },
    { text: "Clients", href: "#clients" },
    { text: "Team", href: "#team" },
  ],
  actionButtons: [
    {
      text: "Contact Us",
      href: "#contact",
      color: `border-2 border-${colorScheme.primaryColor} text-${colorScheme.primaryColor} hover:bg-${colorScheme.outlineButtonHover}`,
      handler: null,
    },
    {
      text: "Get Demo",
      href: "#demo",
      color: `border-2 border-${colorScheme.primaryColor} bg-${colorScheme.primaryColor} text-white hover:bg-${colorScheme.solidButtonHover}`,
      handler: null,
    },
  ],
  menuToggleColor: `bg-${colorScheme.primaryColor}`,
  onScrollHide: true,
  colorScheme: { ...colorScheme },
}
```

## createHero

```

{
  welcomeText: "Welcome to YourSITE Consulting",
  title: "Transform Your Business with",
  highlightedText: "Intelligent Solutions",
  subtitle: "Leverage cutting-edge artificial intelligence to streamline operations, enhance decision-making, and drive unprecedented growth for your enterprise.",
  buttons: [̦

    { text: "Watch Demo", href: "#demo", color: `bg-${colorScheme.primaryColor} text-white hover:bg-${colorScheme.solidButtonHover}` },
    { text: "Get Started", href: "#contact", color: `border-2 border-${colorScheme.primaryColor} text-${colorScheme.primaryColor} hover:bg-${colorScheme.outlineButtonHover}` },

  ],
  rating: { stars: "5.0", text: "5.0 rating on Clutch" },
  enterprisesServed: { count: "500+", description: "enterprises served" },
  image: {

    src: `https://dummyimage.com/600x500/${getTailwindColor(colorScheme.primaryColor)}/ffffff&text=AI+Platform+Interface` ,
    alt: "AI Platform Interface",

  },
  colorScheme: { ...colorScheme },
}

```

## createLeadCapture

```
{
  sectionTag: "Section Tag",
  title: "This Is A Reusable Section Header",
  subheading: "Feel Free to Make this subheading your Heading for the section",
  description: "Description related to the section in which it is placed comes here. It is obviously optional. Any element within this section heading section can be skipped.",
  formFields: [

    { type: "text", placeholder: "First Name" },
    { type: "text", placeholder: "Last Name" },
    { type: "email", placeholder: "Email" },
    { type: "tel", placeholder: "Phone Number" },
    { type: "text", placeholder: "Company" },
    { type: "select", placeholder: "Select a Country", options: ["United States", "United Kingdom", "Canada", "Australia"] },

  ],
  buttonText: "Get Started",
  buttonClass: `w-full py-3 px-6 bg-${colorScheme.primaryColor} text-white rounded-md hover:bg-${colorScheme.solidButtonHover} transition-colors font-medium` ,
  onSubmit: (data) => console.log("Form submitted with data:", data),
  features: [

    {
      iconClass: "fas fa-shopping-cart",
      iconBgColor: `bg-${colorScheme.primaryBg}` ,
      iconColor: `text-${colorScheme.primaryColor}` ,
      title: "AI-Powered Analytics",
      description: "Transform your data into actionable insights with our advanced AI analytics platform. Make informed decisions faster.",
    },
    {
      iconClass: "fas fa-envelope",
      iconBgColor: `bg-${colorScheme.primaryBg}` ,
      iconColor: `text-${colorScheme.primaryColor}` ,
      title: "Process Automation",
      description: "Streamline your operations with intelligent automation solutions that reduce costs and improve efficiency.",
    },

  ],
  colorScheme: { ...colorScheme, sectionBg: "purple-50" },
}

```

## createFeatureChecklist

```
{
    title: null,
    subheading: null,
    description: null,
    checklistItems: ["Something that's pretty interesting", "Something that's super-cool", "Whoa, that's like the sickest thing I've ever heard"],
    colorScheme: { ...colorScheme, sectionBg: "purple-50" },
}

```

## createFeatureHighlights

```
{
  sectionTag: null,
  title: null,
  subheading: null,
  description: null,
  features: [
    {
      title: "Modern Workspace",
      subheading: null,
      description: "Our state-of-the-art offices are designed to inspire creativity and facilitate collaboration, with flexible spaces for both focused work and team interactions.",
      imageUrl: `https://dummyimage.com/800x600/${getTailwindColor(colorScheme.primaryColor)}/ffffff&text=Modern+Workspace` ,
      imageAlt: "Modern Workspace",
      highlights: ["Ergonomic workstations", "Collaborative spaces", "Recreation areas"],
    },
    {
      title: "Growth & Development",
      subheading: null,
      description: "We invest in our team's professional development through continuous learning programs, mentorship opportunities, and career advancement paths.",
      imageUrl: `https://dummyimage.com/800x600/${getTailwindColor(colorScheme.primaryColor)}/ffffff&text=Growth+Opportunities` ,
      imageAlt: "Growth Opportunities",
      highlights: ["Learning & development budget", "Mentorship programs", "Career progression framework"],
    },
  ],
  colorScheme: { ...colorScheme },
}

```

## createKeyOutcomes

```
{
  sectionTag: "Section Tag",
  title: "Title of the Section",
  subheading: null,
  description: "Description related to the section in which it is placed comes here. It is obviously optional. Any element within this section heading section can be skipped.",
  outcomes: [
    "Implement AI-driven automation to reduce operational costs by up to 40%",
    "Develop custom machine learning models for precise business predictions",
    "Enhance customer experience through intelligent chatbots and recommendation systems",
    "Optimize supply chain efficiency using predictive analytics",
    "Implement data-driven decision making across all organizational levels",
    "Ensure AI compliance and ethical implementation of solutions",
    "Accelerate digital transformation with scalable AI infrastructure",
    "Provide comprehensive team training for AI tool adoption",
  ],
  checkmarkColor: `text-${colorScheme.primaryColor}` ,
  stats: {
    title: "500+ Enterprises",
    description: "have transformed their businesses with our AI solutions",
    logos: [
      { src: `https://dummyimage.com/100x100/${getTailwindColor(colorScheme.primaryColor)}/ffffff&text=Tech+Co` , alt: "Technology Company" },
      { src: `https://dummyimage.com/100x100/${getTailwindColor(colorScheme.primaryColor)}/ffffff&text=Finance+` , alt: "Financial Services" },
      { src: `https://dummyimage.com/100x100/${getTailwindColor(colorScheme.primaryColor)}/ffffff&text=Health` , alt: "Healthcare" },
      { src: `https://dummyimage.com/100x100/${getTailwindColor(colorScheme.primaryColor)}/ffffff&text=Retail` , alt: "Retail Giant" },
    ],
    benefits: ["Transform your business with cutting-edge AI solutions tailored to your industry", "Access our team of expert AI consultants and data scientists", "Join leading enterprises in achieving AI-driven digital transformation"],
  },
  colorScheme: { ...colorScheme, sectionBg: "purple-50" },
}

```

## createOfferOverviewWithCTA

```
{
    sectionTag: "Limited Time Offer",
    title: "Here's Everything You're Investing In",
    subheading: null,
    description: null,
    originalPrice: "Rs 6, 999.00",
    offerPrice: "Rs 2, 540.00",
    features: [
      { iconClass: "fas fa-video", bgColor: `bg-${colorScheme.primaryBg}` , iconColor: `text-${colorScheme.primaryColor}` , title: "Live Sessions", description: "Interactive learning with industry experts" },
      { iconClass: "fas fa-certificate", bgColor: `bg-${colorScheme.primaryBg}` , iconColor: `text-${colorScheme.primaryColor}` , title: "Certification", description: "Industry-recognized credentials" },
      { iconClass: "fas fa-users", bgColor: `bg-${colorScheme.primaryBg}` , iconColor: `text-${colorScheme.primaryColor}` , title: "Community Access", description: "Network with peers and mentors" },
    ],
    ctaButtons: [
      {
        text: "Subscribe Now",
        onClick: () => console.log("Subscribed!"),
        bgColor: `bg-${colorScheme.primaryColor}` ,
        textColor: "text-white",
        hoverBgColor: `hover:bg-${colorScheme.solidButtonHover}` ,
      },
      {
        text: "Skip Forever",
        onClick: () => alert("Skipped"),
        borderColor: `border-2 border-${colorScheme.primaryColor}` ,
        textColor: `text-${colorScheme.primaryColor}` ,
        hoverBgColor: `hover:bg-${colorScheme.sectionBg}` ,
      },
    ],
    colorScheme: { ...colorScheme },
  }

```

## createValuePropositionBlocks

```
{
  sectionTag: "Section Tag",
  title: "This Is A Reusable Section Header",
  subheading: "Feel Free to Make this subheading your Heading for the section",
  description: "Description related to the section in which it is placed comes here. It is obviously optional. Any element within this section heading section can be skipped.",
  blocks: [
    [
      { title: "$2M+", description: "AVERAGE CLIENT ROI", iconClass: "fas fa-dollar-sign", bgColor: "bg-gray-100", iconColor: `text-${colorScheme.primaryColor}` },
      { title: "Secret insights", description: "FROM REAL CASE-STUDIES", iconClass: "fas fa-lightbulb", bgColor: "bg-gray-100", iconColor: `text-${colorScheme.primaryColor}` },
    ],
    [
      {
        title: "Top companies hiring in this industry",
        description: "GET HIRED TO WORK FOR THESE GLOBAL GIANTS",
        icons: [
          { src: `https://dummyimage.com/160x40/${getTailwindColor(colorScheme.primaryColor)}/ffffff&text=Microsoft` , alt: "Microsoft" },
          { src: `https://dummyimage.com/160x40/${getTailwindColor(colorScheme.primaryColor)}/ffffff&text=Adobe` , alt: "Adobe" },
          { src: `https://dummyimage.com/160x40/${getTailwindColor(colorScheme.primaryColor)}/ffffff&text=Philips` , alt: "Philips" },
          { src: `https://dummyimage.com/160x40/${getTailwindColor(colorScheme.primaryColor)}/ffffff&text=Intel` , alt: "Intel" },
        ],
        bgColor: `bg-${colorScheme.primaryBg} bg-opacity-50` ,
      },
    ],
    [
      { title: "Multiple projects", description: "LEARN BY DOING", iconClass: "fas fa-code", bgColor: "bg-gray-100", iconColor: `text-${colorScheme.primaryColor}` },
      { title: "Live QnA sessions", description: "TALK WITH INDUSTRY MENTORS", iconClass: "fas fa-video", bgColor: "bg-gray-100", iconColor: `text-${colorScheme.primaryColor}` },
    ],
  ],
  colorScheme: { ...colorScheme },
}

```

## createFAQCollapsed

```
{
  sectionTag: "Section Tag",
  title: "This Is A Reusable Section Header",
  subheading: "Feel Free to Make this subheading your Heading for the section",
  description: "Description related to the section in which it is placed comes here. It is obviously optional. Any element within this section heading section can be skipped.",
  faqs: [
    {
      question: "When will my access to the one-time offer benefits begin?",
      answer: "Your access will begin immediately after successful payment. You'll receive login credentials via email within 5 minutes of purchase.",
    },
    {
      question: "Is it possible to purchase only a part of the One Time Offer?",
      answer: "No, this is an exclusive bundled offer designed to provide comprehensive learning. Individual components cannot be purchased separately at this discounted rate.",
    },
    {
      question: "How long will I have access to the membership content?",
      answer: "You'll have lifetime access to all content included in this offer. Once purchased, you can access the materials at any time.",
    },
  ],
  colorScheme: { ...colorScheme, sectionBg: "purple-50" },
}

```

## createFAQQuick

```
{
    sectionTag: null,
    title: null,
    subheading: null,
    description: null,
    iconClass: "fas fa-question-circle", // Default icon for all questions
    iconBgColor: `bg-${colorScheme.primaryBg}` , // Icon background color
    iconColor: `text-${colorScheme.primaryColor}` , // Icon color
    faqItems: [
      {
        question: "Is there a free version of SoftRex?",
        answer: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
      },
      {
        question: "How to start this tool?",
        answer: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
      },
      {
        question: "How to upgrade to ultimate pro?",
        answer: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
      },
      {
        question: "How to upgrade to ultimate pro?",
        answer: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
      },
    ],
    colorScheme: { ...colorScheme },
  }

```

## createPricing

```
{
    sectionTag: "Attractive Plans",
    title: "This Is A Reusable Section Header",
    subheading: "Feel Free to Make this subheading your Heading for the section",
    description: "Description related to the section in which it is placed comes here. It is obviously optional. Any element within this section heading section can be skipped.",
    pricingOptions: [
      {
        imageSrc: `https://dummyimage.com/48x48/${getTailwindColor(colorScheme.primaryColor)}/ffffff&text=AI` ,
        imageAlt: "AI Starter Icon",
        title: "AI Starter Kit",
        subtitle: "Essential AI tools for small teams",
        description: "Get started with AI tools and models tailored for startups.",
        items: ["12 AI Models", "Cloud-Based Processing", "NLP, Vision, Analytics Use Cases", "Business License"],
        prePriceDescription: "The most cost-effective option. For a long-term relationship with us 🧡",
        offerPrice: "$499",
        originalPrice: "$899",
        postPriceDescription: "Paid quarterly, pause or cancel anytime",
        buttonText: "Get Started",
        buttonHandler: () => alert("AI Starter Kit selected"),
        badge: null,
        style: `bg-${colorScheme.primaryBg}` ,
      },
      {
        imageSrc: `https://dummyimage.com/48x48/${getTailwindColor(colorScheme.primaryColor)}/ffffff&text=AI` ,
        imageAlt: "AI Starter Icon",
        title: "AI Starter Kit",
        subtitle: "Essential AI tools for small teams",
        description: "Get started with AI tools and models tailored for startups.",
        items: ["12 AI Models", "Cloud-Based Processing", "NLP, Vision, Analytics Use Cases", "Business License"],
        prePriceDescription: "The most cost-effective option. For a long-term relationship with us 🧡",
        offerPrice: "$499",
        originalPrice: "$899",
        postPriceDescription: "Paid quarterly, pause or cancel anytime",
        buttonText: "Get Started",
        buttonHandler: () => alert("AI Starter Kit selected"),
        badge: "Most Popular",
        style: `bg-${colorScheme.primaryBg}` ,
      },
      {
        imageSrc: `https://dummyimage.com/48x48/${getTailwindColor(colorScheme.primaryColor)}/ffffff&text=AI` ,
        imageAlt: "AI Starter Icon",
        title: "AI Starter Kit",
        subtitle: "Essential AI tools for small teams",
        description: "Get started with AI tools and models tailored for startups.",
        items: ["12 AI Models", "Cloud-Based Processing", "NLP, Vision, Analytics Use Cases", "Business License"],
        prePriceDescription: "The most cost-effective option. For a long-term relationship with us 🧡",
        offerPrice: "$499",
        originalPrice: "$899",
        postPriceDescription: "Paid quarterly, pause or cancel anytime",
        buttonText: "Get Started",
        buttonHandler: () => alert("AI Starter Kit selected"),
        badge: null,
        style: `bg-${colorScheme.primaryBg}` ,
      },
    ],
    colorScheme: { ...colorScheme },
}

```

## createSocialProof

```
{
    sectionTag: "Section Tag",
    title: "This Is A Reusable Section Header",
    subheading: "Feel Free to Make this subheading your Heading for the section",
    description: "Description related to the section in which it is placed comes here. It is obviously optional. Any element within this section heading section can be skipped.",
    reviews: [
      {
        rating: 5,
        text: "Landify understands content creation. A partner that crafts engaging copy, making my content strategy smarter.",
        imageSrc: `https://dummyimage.com/48x48/${getTailwindColor(colorScheme.primaryColor)}/ffffff&text=AS` ,
        imageAlt: "Alex Smith",
        name: "Alex Smith",
        handle: "@alexsmith",
      },
      {
        rating: 5,
        text: "Optimized response times of Landify are a game-changer. Quick iterations and tailored solutions make it.",
        imageSrc: `https://dummyimage.com/48x48/${getTailwindColor(colorScheme.primaryColor)}/ffffff&text=DV` ,
        imageAlt: "David Visionary",
        name: "David Visionary",
        handle: "@davidvisionary",
      },
      {
        rating: 5,
        text: "Optimized response times of Landify are a game-changer. Quick iterations and tailored solutions make it.",
        imageSrc: `https://dummyimage.com/48x48/${getTailwindColor(colorScheme.primaryColor)}/ffffff&text=DV` ,
        imageAlt: "David Visionary",
        name: "David Visionary",
        handle: "@davidvisionary",
      },
    ],
    colorScheme: { ...colorScheme },
  }

```

## createFooter

```
{
    logo: { src: `https://dummyimage.com/180x60/${getTailwindColor(colorScheme.primaryColor)}/ffffff&text=YourSITE` , alt: "YourSITE" },
    description: "Empowering businesses through intelligent transformation. We bridge the gap between human expertise and artificial intelligence.",
    socialLinks: [
      { iconClass: "fab fa-linkedin-in", href: "#" },
      { iconClass: "fab fa-twitter", href: "#" },
      { iconClass: "fab fa-github", href: "#" },
      { iconClass: "fab fa-instagram", href: "#" },
    ],
    footerSections: {
      services: { title: "SERVICES", links: ["AI Strategy", "Implementation", "Training & Support", "Data Analytics", "Custom Solutions"].map((text) => ({ text, href: "#" })) },
      company: { title: "COMPANY", links: ["About Us", "Our Team", "Careers", "Blog", "Press Kit"].map((text) => ({ text, href: "#" })) },
    },
    newsletter: {
      title: "STAY UPDATED",
      text: "Subscribe to our newsletter for AI insights, company updates, and industry news.",
      placeholder: "Enter your email",
      subscribeText: "Subscribe",
      agreementText: "We will never spam. That’s our promise.",
      onSubscribe: (email) => console.log( `Subscribed with email: ${email}` ),
    },
    legalLinks: [
      { text: "Privacy Policy", href: "#" },
      { text: "Terms of Service", href: "#" },
      { text: "Cookie Settings", href: "#" },
      { text: "Accessibility", href: "#" },
    ],
    certifications: [
      { src: `https://dummyimage.com/60x30/${getTailwindColor(colorScheme.primaryColor)}/ffffff&text=ISO` , alt: "ISO Certification" },
      { src: `https://dummyimage.com/60x30/${getTailwindColor(colorScheme.primaryColor)}/ffffff&text=SOC2` , alt: "SOC2 Certification" },
      { src: `https://dummyimage.com/60x30/${getTailwindColor(colorScheme.primaryColor)}/ffffff&text=GDPR` , alt: "GDPR Compliant" },
    ],
    colorScheme: { ...colorScheme, sectionBg: "gray-900", textColor: "gray-200" },
  }
```

## createBackToTopButton

```
  {
      colorScheme: { ...colorScheme },
  }

```
