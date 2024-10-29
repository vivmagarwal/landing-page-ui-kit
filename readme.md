Here's a `README.md` file for your "Landing Page UI Kit" library:
# Landing Page uikit

A very strongly opinionated UI components library in Vanilla JavaScript designed for creating clean, responsive landing pages without dependencies. 

The sole purpose of this library is to help you build a landing page quickly without worrying about the design and responsiveness in **less than 10 minutes**.

# Live Example:
https://codepen.io/drupalastic/full/MWNQVXQ


# Suggested way to use this library:
https://chatgpt.com/g/g-3or12t8l9-landing-page-live-in-10-minutes 

# Ready made Components
This kit includes essential components for a landing page. Here are all the components in the `uikit`:

1. **createNavigation** - Generates a navigation bar with logo, links, and action buttons for both desktop and mobile views.
2. **createHero** - Creates a hero section with a welcome text, title, subtitle, buttons, rating, and image.
3. **createLeadCapture** - Sets up a lead capture form with form fields, submit button, and feature highlights.
4. **createFeatureChecklist** - Renders a section with a checklist of features or highlights.
5. **createFeatureHighlights** - Displays a section of feature highlights, including title, image, and description.
6. **createKeyOutcomes** - Displays key outcomes, a description, and supporting statistics with logos and benefits.
7. **createOfferOverviewWithCTA** - Provides an overview of an offer with pricing details, feature highlights, and CTA buttons.
8. **createValuePropositionBlocks** - Shows value proposition blocks with icons or company logos.
9. **createFAQCollapsed** - Creates a collapsible FAQ section for common questions.
10. **createFAQQuick** - Generates a quick-access FAQ section with an icon for each question.
11. **createPricing** - Displays a pricing table with various pricing options, descriptions, and CTA buttons.
12. **createSocialProof** - Renders a section for social proof with customer reviews and ratings.
13. **createFooter** - Sets up a footer with logo, company description, social links, and sections for services, company info, newsletter, legal links, and certifications.


# Installation

Install via npm:

```bash
npm install landing-page-ui-kit
```

Or, directly include via CDN:

```html
<script src="https://unpkg.com/landing-page-ui-kit@1.0.0/landing-page-ui-kit.js"></script>
```

# Boiler plate required
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>YourSITE Navigation</title>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.19/tailwind.min.css" rel="stylesheet" />
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet" />
  </head>
  <body class="bg-gray-50">
    <script src="https://unpkg.com/landing-page-ui-kit@latest/landing-page-uikit.js"></script>
    <script>
      // append uikit components to document.body here

    </script>
    <script>
      document.body.appendChild(uikit.createBackToTopButton({color: "bg-purple-900", hoverColor: "hover:bg-purple-800"}));
    </script>
  </body>
</html>
```

# Usage

Each component can be used by calling functions provided in the library. Components can be added to the DOM by appending them to the `document.body` or a specific element in your page.

# *** THE BELOW DOCUMENTATION IS OUTDATED! IT WILL BE UPDATED SOON! ***

## `createNavigation()`

Here’s an example usage of the `createNavigation` function, with comments explaining each part for beginners:

```javascript
// Step 1: Define the options you want to customize for the navigation
const navOptions = {
  logo: {
    src: "https://example.com/logo.png", // URL of the logo image
    alt: "My Site",                      // Alt text for the logo image
    href: "/home"                        // Link that the logo should point to; defaults to "/"
  },
  links: [
    { text: "Home", href: "#home" },
    { text: "About", href: "#about" },
    { text: "Contact", href: "#contact" }
  ],
  actionButtons: [
    {
      text: "Sign Up",                     // Text displayed on the button
      href: "#signup",                     // URL the button should point to
      color: "bg-blue-500 text-white"      // CSS classes for button color and text color
    },
    {
      text: "Log In", 
      href: "#login", 
      color: "border-2 border-blue-500 text-blue-500"
    }
  ],
  menuToggleColor: "bg-blue-500",         // Color of the mobile menu toggle icon, default is "bg-purple-900"
  onScrollHide: true                      // Enables hiding the nav bar on scroll down, defaults to true
};

// Step 2: Create the navigation using the `createNavigation` function
const navigationElement = uiKit.createNavigation(navOptions);

// Step 3: Append the navigation to the body or a specific container in the HTML
document.body.appendChild(navigationElement);
```

### Explanation of Options

1. **`logo` (optional)**
   - This object defines the logo properties for the navigation.
   - `src` (default: "https://dummyimage.com/180x60/4c1d95/ffffff&text=YourSITE"): URL of the logo image.
   - `alt` (default: "YourSITE"): Alternative text for accessibility.
   - `href` (default: "/"): URL the logo links to when clicked.

2. **`links` (optional)**
   - An array of link objects for the main menu (e.g., Home, About).
   - Each link object requires:
     - `text`: Display text for the link.
     - `href`: URL the link should point to.
   - If no links are provided, it defaults to:
     ```javascript
     [
       { text: "Services", href: "#services" },
       { text: "Process", href: "#process" },
       { text: "Clients", href: "#clients" },
       { text: "Team", href: "#team" }
     ];
     ```

3. **`actionButtons` (optional)**
   - An array of button objects for call-to-action buttons (e.g., "Sign Up," "Log In").
   - Each button object requires:
     - `text`: Display text on the button.
     - `href`: URL the button should point to.
     - `color`: CSS classes to style the button, e.g., `"bg-blue-500 text-white"`.
   - If omitted, defaults to:
     ```javascript
     [
       { text: "Contact Us", href: "#contact", color: "border-2 border-purple-900 text-purple-900 hover:bg-purple-50" },
       { text: "Get Demo", href: "#demo", color: "border-2 border-purple-900 bg-purple-900 text-white hover:bg-purple-800" }
     ];
     ```

4. **`menuToggleColor` (optional)**
   - Specifies the color of the menu toggle icon for mobile views.
   - Accepts CSS classes, e.g., `"bg-blue-500"`.
   - Default: `"bg-purple-900"`.

5. **`onScrollHide` (optional)**
   - Determines whether the navigation bar hides when the user scrolls down.
   - `true` hides the navbar on scroll down; `false` keeps it visible.
   - Default: `true`.

### Null or Omitting Options

If you don’t want to customize a certain option, you can either:
   - **Omit it entirely** from the options object. This will apply the default value.
   - **Set it to `null`** to remove the option's effect or use its default setting if it's optional.

## `createHero()`


```javascript
// Example usage of the createHero component in uiKit

// Step 1: Define your options object. If you don't set an option, 
// it will fall back to its default value as defined in the createHero function.

const heroOptions = {
  // "welcomeText" is a small introductory text displayed as a badge above the title.
  // Default: "Welcome to YourSITE Consulting"
  // You can set this to null to hide it.
  welcomeText: "Welcome to AI Solutions",

  // "title" is the main headline text in the hero section.
  // Default: "Transform Your Business with"
  // You can customize this to showcase your main message.
  title: "Enhance Efficiency with",

  // "highlightedText" is part of the title text but styled with emphasis.
  // Default: "Intelligent Solutions"
  // You can customize this to highlight a keyword or key phrase in the title.
  highlightedText: "AI-Powered Tools",

  // "subtitle" is a smaller text below the title that provides additional details.
  // Default: "Leverage cutting-edge artificial intelligence to streamline operations, enhance decision-making, and drive unprecedented growth for your enterprise."
  // You can set this to null to hide it if not needed.
  subtitle: "Use AI to automate, improve, and transform your business operations.",

  // "buttons" is an array of button objects, each with "text", "href", and "color".
  // Default: 
  // [
  //   { text: "Watch Demo", href: "#demo", color: "bg-purple-900 text-white hover:bg-purple-800" },
  //   { text: "Get Started", href: "#contact", color: "border-2 border-purple-900 text-purple-900 hover:bg-purple-50" }
  // ]
  // You can customize text, links, and colors for each button or add more buttons here.
  buttons: [
    { text: "Learn More", href: "#learn-more", color: "bg-blue-500 text-white hover:bg-blue-400" },
    { text: "Contact Us", href: "#contact", color: "border-2 border-blue-500 text-blue-500 hover:bg-blue-50" }
  ],

  // "rating" object allows you to display a rating section in the hero.
  // Default: { stars: "5.0", text: "5.0 rating on Clutch" }
  // You can set this to null to hide it or customize the stars and text.
  rating: { stars: "4.9", text: "Rated by our clients" },

  // "enterprisesServed" shows the number of enterprises served.
  // Default: { count: "500+", description: "enterprises served" }
  // Set this to null if you don't need to display this.
  enterprisesServed: { count: "1000+", description: "companies transformed" },

  // "image" object for the hero image displayed beside the text.
  // Default: 
  // { src: "https://dummyimage.com/600x500/4c1d95/ffffff&text=AI+Platform+Interface", alt: "AI Platform Interface" }
  // You can replace this with your image URL and alt text or set it to null to hide the image.
  image: {
    src: "https://dummyimage.com/600x500/333333/ffffff&text=Your+Image+Here",
    alt: "Platform Interface"
  }
};

// Step 2: Create the hero section using uiKit's createHero function
const heroSection = uiKit.createHero(heroOptions);

// Step 3: Append the generated hero section to your webpage
// Here, we assume there is a container in your HTML with the ID "hero-container"
document.getElementById("hero-container").appendChild(heroSection);
```

### Guide to Options
- **`welcomeText`**: A small, highlighted introductory text displayed as a badge above the main title. If you leave this out or set it to `null`, it will be hidden. Default is `"Welcome to YourSITE Consulting"`.
  
- **`title`**: The main title text in the hero section. This can be any attention-grabbing phrase relevant to your site or product. Default is `"Transform Your Business with"`.

- **`highlightedText`**: Part of the title that appears in a visually emphasized style. Use it to draw attention to a keyword. Default is `"Intelligent Solutions"`.

- **`subtitle`**: A descriptive line of text under the title, useful for providing context or additional information. Default is a sentence about leveraging AI for business growth. Set it to `null` if you don’t want it to show up.

- **`buttons`**: An array of objects, each representing a button with:
  - `text`: The button text.
  - `href`: The link the button navigates to.
  - `color`: A string for styling the button (default colors are set to purple for branding consistency).
  If omitted, the default buttons are “Watch Demo” and “Get Started.”

- **`rating`**: An object to display the rating, with `stars` and `text` properties. Set to `null` if not needed. Default rating is `"5.0"` with text `"5.0 rating on Clutch"`.

- **`enterprisesServed`**: Shows the number of companies or enterprises your service has worked with, including a `count` and `description`. Defaults to `"500+"` and `"enterprises served"`. Set to `null` to hide this.

- **`image`**: Displays an image on the hero section. Set `src` to your image’s URL and `alt` to describe it for accessibility. The default image is an AI platform placeholder; set to `null` if no image is desired.

## `createLeadCapture()`

Here's an example usage of the `createLeadCapture` component, with detailed comments for beginners explaining each option available and mentioning default values.

```javascript
// First, define an options object to customize the lead capture section
const leadCaptureOptions = {
  // The sectionTag is a label displayed at the top, acting like a mini-title.
  // If you don't provide this, the default will be "Section Tag".
  sectionTag: "Contact Us",

  // Title of the section. If not specified, it defaults to "This Is A Reusable Section Header".
  title: "Join Our Community",

  // Subheading to provide extra context, positioned right below the title.
  // Defaults to "Feel Free to Make this subheading your Heading for the section".
  subheading: "Stay updated with our latest offerings",

  // Description text displayed below the title and subheading.
  // This is optional; you can skip it, and it will default to a placeholder description.
  description: "Sign up to receive insights and updates directly from us.",

  // Array of form fields to gather user input.
  // If omitted, defaults to a set of fields: First Name, Last Name, Email, Phone Number, Company, and Country (as a dropdown).
  formFields: [
    { type: "text", placeholder: "First Name" },
    { type: "text", placeholder: "Last Name" },
    { type: "email", placeholder: "Email Address" },
    { type: "tel", placeholder: "Phone Number" },
    { type: "text", placeholder: "Company Name" },
    {
      type: "select",
      placeholder: "Select a Country", // This appears as the first, disabled option in a dropdown.
      options: ["United States", "Canada", "United Kingdom", "Australia"], // Dropdown options for user selection.
    },
  ],

  // Text for the submit button; defaults to "Get Started" if left out.
  buttonText: "Subscribe Now",

  // CSS classes for styling the submit button.
  // Defaults to a purple theme if not provided.
  buttonClass: "w-full py-3 px-6 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors font-medium",

  // Callback function that runs when the form is submitted.
  // It takes form data (an object with key-value pairs) as input.
  // The default logs form data to the console, so here we provide our own function.
  onSubmit: (data) => {
    console.log("Form submitted with data:", data);
    // Here, you can add any action, such as sending the data to a server.
  },

  // Features list displays alongside the form, showcasing benefits or highlights.
  // Defaults to four pre-defined features if not provided.
  features: [
    {
      iconClass: "fas fa-shield-alt", // Icon class for the feature (using Font Awesome in this example).
      iconBgColor: "bg-green-100", // Background color for the icon.
      iconColor: "text-green-500", // Icon color.
      title: "Data Security", // Title of the feature.
      description: "We prioritize the safety and confidentiality of your data.",
    },
    {
      iconClass: "fas fa-clock",
      iconBgColor: "bg-yellow-100",
      iconColor: "text-yellow-500",
      title: "24/7 Support",
      description: "Access our dedicated support team anytime you need assistance.",
    },
  ],
};

// Now, create the lead capture section using the uiKit's createLeadCapture function with the options defined above.
const leadCaptureSection = uiKit.createLeadCapture(leadCaptureOptions);

// Finally, add this section to the DOM. Make sure you have a parent container to append this section to.
document.getElementById("yourContainerID").appendChild(leadCaptureSection);
```

### Explanation of Options in `createLeadCapture`

1. **`sectionTag`** (optional): A small label or "tag" for the section. Default is `"Section Tag"`.
   
2. **`title`** (optional): Sets the main title of the section. Default is `"This Is A Reusable Section Header"`.

3. **`subheading`** (optional): Adds a subtitle under the title. Default is `"Feel Free to Make this subheading your Heading for the section"`.

4. **`description`** (optional): Provides more context or information about the section. You can leave it out or include a custom description.

5. **`formFields`** (optional): Defines the fields in the form. By default, this includes fields for "First Name," "Last Name," "Email," "Phone Number," "Company," and a dropdown for "Country." Each field is defined by:
   - `type`: The type of input (e.g., `text`, `email`, `tel`, or `select` for dropdown).
   - `placeholder`: The text displayed as a hint in each field.
   - `options` (only for `select` fields): An array of options for dropdown selection.

6. **`buttonText`** (optional): Sets the text inside the submit button. Default is `"Get Started"`.

7. **`buttonClass`** (optional): CSS classes for styling the button. By default, the button has a purple theme, but you can customize it here.

8. **`onSubmit`** (optional): A callback function triggered when the form is submitted. It receives the form data as an object, where each field's placeholder text becomes the key, and the input value is the value. Default behavior logs the data to the console.

9. **`features`** (optional): An array of feature items displayed next to the form. Each feature has:
   - `iconClass`: The icon class for the feature (you can use Font Awesome or similar icons).
   - `iconBgColor`: The background color of the icon.
   - `iconColor`: The icon color.
   - `title`: The title or headline of the feature.
   - `description`: A brief description of the feature. 

This example shows how you can customize the component, but you can also leave out properties to use the default values, allowing flexibility based on your requirements.


## `createFeatureChecklist()`

Here’s an example usage of `createFeatureChecklist` with detailed comments, guiding beginners on how to customize and use each option. I've reviewed the code carefully to ensure the guidance aligns with the component's functionality.

```javascript
// Step 1: Create an object with options for the createFeatureChecklist function.
// This object allows you to customize the section title, subheading, description, 
// and checklist items. Each option is explained in detail below.

const options = {
  // 'title' sets the main heading for the section.
  // Default: "This Is A Reusable Section Header"
  title: "Our Unique Features",

  // 'subheading' is a smaller text below the main title.
  // If left as null, no subheading will appear.
  // Default: "Feel Free to Make this subheading your Heading for the section"
  subheading: "Why Choose Us",

  // 'description' provides additional context for the checklist section.
  // If left as null, no description will appear.
  // Default: "Description related to the section in which it is placed comes here. It is optional."
  description: "Explore the advantages we offer to help you succeed.",

  // 'checklistItems' is an array of strings representing each checklist item.
  // Default: ["Something that's pretty interesting", "Something that's super-cool", "Whoa, that's like the sickest thing I've ever heard"]
  checklistItems: [
    "Fast and secure transactions",
    "24/7 customer support",
    "Customizable to your needs",
    "Advanced data protection",
  ],
};

// Step 2: Call createFeatureChecklist with the options object you just defined.
// This function returns a DOM element for the checklist section. You can add
// this element to your webpage by appending it to an existing HTML element.

const featureChecklistSection = uiKit.createFeatureChecklist(options);

// Step 3: Append the returned checklist section to a part of your webpage.
// For example, if you have a <div id="main-content">, you can add the checklist section to it like this:

document.getElementById("main-content").appendChild(featureChecklistSection);
```

### Explanation of Each Option
- **title**: Sets the main heading for this section. You can change it to any title that fits your content. If omitted, it defaults to `"This Is A Reusable Section Header"`.
- **subheading**: A smaller subtitle under the main title. If you don’t need it, you can set this option to `null` or leave it out entirely.
- **description**: Adds a paragraph to describe or provide context for the checklist items. If you don’t want any description, set this to `null`.
- **checklistItems**: An array where each string represents an item in the checklist. Customize this list to display each unique feature you want to highlight. If omitted, it defaults to a sample list: `["Something that's pretty interesting", "Something that's super-cool", "Whoa, that's like the sickest thing I've ever heard"]`.

This example and these comments should give beginners a clear roadmap to using `createFeatureChecklist` and customizing it to their needs!

## `createFeatureHighlights()`

Here's an example usage of the `createFeatureHighlights` component in JavaScript, with comments guiding beginners on each option available, including which ones can be set to `null` and default values where applicable:

```javascript
// First, we define an options object to pass to `createFeatureHighlights`.
// Each option here customizes part of the component, but many are optional and can be set to `null`.

// This function generates a "feature highlights" section that displays details about different features, 
// each including a title, description, and an image.

const featureHighlightsOptions = {
  // sectionTag (optional): A short label displayed at the top. If not provided, defaults to "Section Tag".
  sectionTag: "Key Benefits",

  // title (optional): The main header text for the section. Defaults to "This Is A Reusable Section Header".
  title: "Why Choose Our Platform",

  // subheading (optional): Additional subheading text for context. It’s OK to set this to null if not needed.
  subheading: "Features that make a difference",

  // description (optional): A short paragraph that provides more detail about this section.
  // Can be set to null if unnecessary.
  description: "Our platform is designed to enhance your experience and drive growth.",

  // features (required): An array of feature objects, each describing a single feature to highlight.
  // Each feature object includes the following properties:
  features: [
    {
      // title (required): The feature's title, which appears prominently for each feature.
      title: "Modern Workspace",

      // subheading (optional): A smaller, supporting heading that provides further context for the feature.
      // Can be set to null if not needed.
      subheading: "Comfort and Flexibility",

      // description (required): A paragraph describing what this feature offers. Ensure this is concise and meaningful.
      description: "Our state-of-the-art offices are designed to inspire creativity and facilitate collaboration, with flexible spaces for both focused work and team interactions.",

      // imageUrl (required): The URL of an image that represents the feature.
      // Make sure this URL points to an accessible image file.
      imageUrl: "https://dummyimage.com/800x600/4c1d95/ffffff&text=Modern+Workspace",

      // imageAlt (required): Alternative text for the image, describing it for users who may not see it (e.g., screen readers).
      imageAlt: "Modern Workspace",

      // highlights (optional): An array of short text highlights that describe specific points about the feature.
      // This list can be left empty or set to null if there are no specific highlights.
      highlights: ["Ergonomic workstations", "Collaborative spaces", "Recreation areas"],
    },
    {
      // Another feature object following the same structure:
      title: "Growth & Development",
      subheading: null, // Setting to null, so this feature won't display a subheading.
      description: "We invest in our team's professional development through continuous learning programs, mentorship opportunities, and career advancement paths.",
      imageUrl: "https://dummyimage.com/800x600/4c1d95/ffffff&text=Growth+Opportunities",
      imageAlt: "Growth Opportunities",
      highlights: ["Learning & development budget", "Mentorship programs", "Career progression framework"],
    },
  ],
};

// Now we create the feature highlights section by passing our options object to the `createFeatureHighlights` function.
const featureHighlightsSection = uiKit.createFeatureHighlights(featureHighlightsOptions);

// Finally, append the generated section to a container in your HTML.
document.getElementById("yourContainerId").appendChild(featureHighlightsSection);
```

### Explanation of Each Option in `createFeatureHighlights`

1. **`sectionTag`**: Optional short text at the top of the section. *Default*: "Section Tag". You can leave this empty if not needed.

2. **`title`**: Optional main title text for the section. *Default*: "This Is A Reusable Section Header".

3. **`subheading`**: Optional subtitle text to further explain the section. Can be `null`.

4. **`description`**: Optional short paragraph providing context for the section. Can be set to `null`.

5. **`features`**: An **array of feature objects**, where each object must include:
   - **`title`**: Required. Name of the feature.
   - **`subheading`**: Optional. Brief subheading for extra context; can be `null`.
   - **`description`**: Required. Text explaining the feature in detail.
   - **`imageUrl`**: Required. URL of an image for the feature.
   - **`imageAlt`**: Required. Alternative text describing the image for accessibility.
   - **`highlights`**: Optional. An array of bullet points to highlight specific aspects. Can be left empty or set to `null`.

This example setup will display a visually appealing feature highlights section on your webpage with custom titles, images, and highlights tailored to each feature.

## `createKeyOutcomes()`

Here's an example usage of the `createKeyOutcomes` component. I'll walk through each option available, including setting values to `null`, to help beginners understand how to customize it:

```javascript
// Example usage of `createKeyOutcomes` component
// This component displays key outcomes, statistics, and achievements for a company or product. 
// It includes a list of outcomes with checkmarks, as well as a "stats" section that shows 
// industry-specific achievements, logos, and benefits.

// 1. Define the options object to customize the section.
const options = {
  // sectionTag: Add a short tag or label at the top of the section. Defaults to "Section Tag" if not specified.
  sectionTag: "Our Achievements",

  // title: The main header for this section. Defaults to "This Is A Reusable Section Header" if omitted.
  title: "How Our AI Solutions Drive Success",

  // subheading: Add an additional line under the title for emphasis. Can be set to null if not needed.
  subheading: "Leverage insights to achieve operational excellence",

  // description: A brief overview or summary for this section. Can be null if not needed.
  description: "Our AI solutions deliver measurable outcomes across industries, driving efficiency and profitability.",

  // outcomes: An array of bullet points to showcase specific outcomes. These come with checkmarks by default.
  // If no outcomes are provided, it defaults to pre-defined outcomes like cost reduction and digital transformation.
  outcomes: [
    "Reduce operational costs by up to 40%",
    "Enhance customer engagement with AI-powered chatbots",
    "Implement data-driven decision-making across teams",
    "Achieve AI compliance and ensure ethical use of data",
  ],

  // checkmarkColor: Customize the color of the checkmarks for the outcomes list. Defaults to "text-green-500".
  checkmarkColor: "text-blue-500",

  // stats: An object to highlight industry-specific statistics and achievements.
  stats: {
    // title: A heading for the stats section. Defaults to "500+ Enterprises".
    title: "Trusted by 800+ Companies",

    // description: A short description below the stats title. Defaults to a generic description if omitted.
    description: "Leading organizations trust our AI solutions for transformative business outcomes.",

    // logos: An array of objects for displaying company logos. Each logo should have a 'src' and 'alt' property.
    logos: [
      { src: "https://dummyimage.com/100x100/4c1d95/ffffff&text=Tech+Co", alt: "Technology Company" },
      { src: "https://dummyimage.com/100x100/4c1d95/ffffff&text=Finance+", alt: "Financial Services" },
      { src: "https://dummyimage.com/100x100/4c1d95/ffffff&text=Health", alt: "Healthcare" },
      { src: "https://dummyimage.com/100x100/4c1d95/ffffff&text=Retail", alt: "Retail Giant" },
    ],

    // benefits: A list of benefits or additional points related to the stats. Displayed with checkmarks by default.
    // Defaults to three predefined benefits if no benefits are provided.
    benefits: [
      "Access expert AI consultants and data scientists",
      "Join leading enterprises in digital transformation",
      "Tailored AI solutions for your industry",
    ],
  },
};

// 2. Create the section with the customized options.
// This generates the `createKeyOutcomes` component using the options defined above.
const keyOutcomesSection = uiKit.createKeyOutcomes(options);

// 3. Append the created section to the document body or a specific container.
document.body.appendChild(keyOutcomesSection);
```

### Explanation of Options

1. **`sectionTag`**: This is a label that appears at the top of the section. If you set it to `null`, the default tag **"Section Tag"** will be used. 

2. **`title`**: Main heading for the section. Defaults to **"This Is A Reusable Section Header"**. Set it to `null` if you don't need a title.

3. **`subheading`**: Optional text below the title to give more context. If you don’t need this, set it to `null`.

4. **`description`**: A summary or introduction text for the section. If you don’t want a description, set this to `null`.

5. **`outcomes`**: An array of key achievements or results. Each item is displayed with a checkmark. If you don't provide this array, it defaults to a set of predefined outcomes.

6. **`checkmarkColor`**: The color of the checkmarks next to each outcome. Default is **"text-green-500"**. 

7. **`stats`**: An object that highlights statistics about your company's achievements. Here are the properties:

   - **`title`**: Title for the stats section. Defaults to **"500+ Enterprises"**.
   - **`description`**: Short text below the title. Defaults to a general statement if not set.
   - **`logos`**: Array of objects for each logo. Each object should have a `src` (image URL) and `alt` (description) property.
   - **`benefits`**: List of achievements or special features. Defaults to a few predefined benefits if not provided.

### Adding the Component to Your Page

After creating the component with your customized `options`, you can add it to your HTML by using `document.body.appendChild(keyOutcomesSection)` or by appending it to a specific container. This way, you can position it as needed on your webpage.


## `createOfferOverviewWithCTA()`

Sure! Let's walk through an example usage of `createOfferOverviewWithCTA`. I'll add detailed comments to guide beginners on how to use each option and what default values are available.

### Example Usage of `createOfferOverviewWithCTA`

```javascript
// Importing uiKit if necessary (adjust this based on your project setup)
// const uiKit = ... 

// Step 1: Define options for the `createOfferOverviewWithCTA` component.
// Here, we'll customize some of the options, and we'll leave others out 
// (those left out will fall back to their default values in the component).

const offerOptions = {
  // Set the tag line for this section, which appears above the title.
  // Default value: "Limited Time Offer".
  sectionTag: "Special Offer!",

  // Title text for this section, displayed prominently.
  // Default value: "Here's Everything You're Investing In".
  title: "Ultimate AI Training Program",

  // Subtitle under the main title. Useful for adding extra emphasis.
  // Default value: `null`, which means no subtitle will display.
  subheading: "All you need to master AI",

  // Description text to provide additional information about this section.
  // Default value: `null`, so if left out, no description will show.
  description: "Gain lifetime access to expert-led courses and mentorship.",

  // The original price before discount (crossed out). If not provided, this field won’t display.
  originalPrice: "Rs 10,000.00",

  // The actual offer price. This should be set to show the discount price.
  // Default value: "Rs 2,540.00".
  offerPrice: "Rs 5,000.00",

  // Features to showcase in this offer (up to 3 are typically displayed in the UI).
  // Each feature requires:
  // - `iconClass`: A font-awesome icon class name, e.g., `fas fa-video` for a video icon.
  // - `bgColor`: Background color for the icon's container, e.g., `bg-purple-100`.
  // - `iconColor`: Color of the icon itself, e.g., `text-purple-900`.
  // - `title`: Title of the feature.
  // - `description`: Description of the feature.
  features: [
    { iconClass: "fas fa-video", bgColor: "bg-purple-100", iconColor: "text-purple-900", title: "Live Sessions", description: "Interactive learning with industry experts" },
    { iconClass: "fas fa-certificate", bgColor: "bg-blue-100", iconColor: "text-blue-900", title: "Certification", description: "Earn a recognized certification" },
    { iconClass: "fas fa-users", bgColor: "bg-purple-100", iconColor: "text-purple-900", title: "Community Access", description: "Connect with peers and mentors" },
  ],

  // Call-to-action (CTA) buttons at the bottom of the offer overview.
  // Each button can include:
  // - `text`: The text to show on the button.
  // - `onClick`: A function that runs when the button is clicked.
  // - `bgColor`, `textColor`, and `hoverBgColor` to style the button.
  // You can customize both or leave out one if only a single button is needed.
  ctaButtons: [
    {
      text: "Subscribe Now",
      onClick: () => console.log("User clicked Subscribe!"), // Callback for subscribe button
      bgColor: "bg-purple-900", // Background color for button
      textColor: "text-white", // Text color for button
      hoverBgColor: "hover:bg-purple-800", // Hover background color
    },
    {
      text: "Skip Forever",
      onClick: () => alert("User skipped the offer"), // Callback for skip button
      borderColor: "border-2 border-purple-900", // Border color for button
      textColor: "text-purple-900", // Text color for button
      hoverBgColor: "hover:bg-purple-50", // Hover background color
    },
  ],
};

// Step 2: Create the offer section by passing the `offerOptions` to `createOfferOverviewWithCTA`.
// This generates the section based on the options provided.

const offerSection = uiKit.createOfferOverviewWithCTA(offerOptions);

// Step 3: Append the offer section to the DOM (e.g., inside a container element).
// Ensure you have a container in your HTML, such as <div id="offer-section"></div>.

document.getElementById("offer-section").appendChild(offerSection);
```

### Explanation of Options

1. **`sectionTag`**: Displays as a small tagline above the main title. *Default*: `"Limited Time Offer"`.

2. **`title`**: The main heading for this section. *Default*: `"Here's Everything You're Investing In"`.

3. **`subheading`**: Optional subtitle under the main title, adding extra emphasis or detail. *Default*: `null` (won't display if omitted).

4. **`description`**: Optional paragraph under the subheading for more context. *Default*: `null`.

5. **`originalPrice`**: The crossed-out original price, indicating a discount. If left out, this field won’t appear.

6. **`offerPrice`**: The discounted price shown prominently. *Default*: `"Rs 2,540.00"`.

7. **`features`**: Lists up to 3 feature highlights for the offer. Each feature object includes:
   - `iconClass` for a font-awesome icon class,
   - `bgColor` for the background color of the icon,
   - `iconColor` for the icon’s color,
   - `title` and `description` text.

8. **`ctaButtons`**: An array of button objects for call-to-action. Each button can have:
   - `text` (label for the button),
   - `onClick` (function triggered on click),
   - `bgColor`, `textColor`, and `hoverBgColor` for styling.

This structure gives you flexibility to tailor the section for different types of offers, from subscriptions to one-time purchases. Let me know if you'd like any further customization!

## `createValuePropositionBlocks()`

Here's an example of how to use `createValuePropositionBlocks` with detailed comments and guidance on different options. I've carefully read through the component code to ensure all instructions are accurate.

```javascript
// Example usage of createValuePropositionBlocks

// First, set up your options object with different configurations.
// This example will guide you through each option available.

const options = {
  sectionTag: "Our Value Proposition", // This sets a small label or tag at the top of the section.
                                       // Default is "Section Tag". You can set it to null if you don't want it.

  title: "Why Choose Us", // Sets the main title of the section. Default is "This Is A Reusable Section Header".
                          // You can customize it with any string or set it to null to exclude the title.

  subheading: "Benefits of Working with Us", // This subheading appears just below the title.
                                             // Default is "Feel Free to Make this subheading your Heading for the section".
                                             // You can set it to null if you don’t want a subheading.

  description: "We offer unparalleled expertise and innovative solutions to help your business succeed.", 
  // Sets a descriptive paragraph under the subheading.
  // Default is "Description related to the section in which it is placed comes here."
  // If not needed, you can set it to null.

  blocks: [
    [
      {
        title: "$2M+", // Title of the block, displayed prominently.
        description: "AVERAGE CLIENT ROI", // Short description to provide context for the title.
        iconClass: "fas fa-dollar-sign", // Icon to visually represent the block, uses FontAwesome classes.
        bgColor: "bg-purple-50", // Background color of the block. This can be any valid Tailwind color class.
        iconColor: "text-purple-900", // Color of the icon, uses Tailwind text color classes.
      },
      {
        title: "Secret insights",
        description: "FROM REAL CASE-STUDIES",
        iconClass: "fas fa-lightbulb",
        bgColor: "bg-purple-50",
        iconColor: "text-purple-900",
      },
    ],
    [
      {
        title: "Top companies hiring in this industry",
        description: "GET HIRED TO WORK FOR THESE GLOBAL GIANTS",
        icons: [
          { src: "https://dummyimage.com/160x40/4c1d95/ffffff&text=Microsoft", alt: "Microsoft" },
          { src: "https://dummyimage.com/160x40/4c1d95/ffffff&text=Adobe", alt: "Adobe" },
          { src: "https://dummyimage.com/160x40/4c1d95/ffffff&text=Philips", alt: "Philips" },
          { src: "https://dummyimage.com/160x40/4c1d95/ffffff&text=Intel", alt: "Intel" },
        ],
        bgColor: "bg-blue-50",
      },
    ],
    [
      {
        title: "Multiple projects",
        description: "LEARN BY DOING",
        iconClass: "fas fa-code",
        bgColor: "bg-purple-50",
        iconColor: "text-purple-900",
      },
      {
        title: "Live QnA sessions",
        description: "TALK WITH INDUSTRY MENTORS",
        iconClass: "fas fa-video",
        bgColor: "bg-purple-50",
        iconColor: "text-purple-900",
      },
    ],
  ],
};

// Use the options object to create the value proposition blocks
document.body.appendChild(uiKit.createValuePropositionBlocks(options));
```

### Explanation of Each Option

1. **`sectionTag`**: A small label shown at the top, often in uppercase.
   - **Default**: `"Section Tag"`
   - **Type**: `string` or `null`
   - **Tip**: Set to `null` if you want no label at the top.

2. **`title`**: The main heading of the section.
   - **Default**: `"This Is A Reusable Section Header"`
   - **Type**: `string` or `null`
   - **Tip**: Set to a descriptive string, or `null` to omit the title.

3. **`subheading`**: A subheading shown below the title.
   - **Default**: `"Feel Free to Make this subheading your Heading for the section"`
   - **Type**: `string` or `null`
   - **Tip**: Set to `null` if not needed.

4. **`description`**: A paragraph explaining the section's purpose.
   - **Default**: `"Description related to the section in which it is placed comes here."`
   - **Type**: `string` or `null`
   - **Tip**: Use a concise explanation or set to `null` if not needed.

5. **`blocks`**: This is the main content structure for your value proposition.
   - **Structure**: An array of arrays, where each sub-array represents a column of blocks.
   - **Each Block Object** includes:
     - **`title`**: Main heading for the block (e.g., `"$2M+"`).
     - **`description`**: Subtext explaining the block title (e.g., `"AVERAGE CLIENT ROI"`).
     - **`iconClass`**: (Optional) FontAwesome class for an icon, e.g., `"fas fa-dollar-sign"`. If omitted, no icon is displayed.
     - **`bgColor`**: Background color, using Tailwind color classes (e.g., `"bg-purple-50"`).
     - **`iconColor`**: (Optional) Text color for the icon (e.g., `"text-purple-900"`).
     - **`icons`**: (Optional) If your block represents brands, use `icons` instead of `iconClass`.
       - An array of objects with:
         - **`src`**: Image URL for the logo (e.g., `"https://dummyimage.com/160x40/4c1d95/ffffff&text=Microsoft"`).
         - **`alt`**: Alt text for accessibility.

Feel free to customize or adjust each option as needed for your project. Let me know if you need any further explanation!

## `createFAQCollapsed()`
Here’s a beginner-friendly example for using `createFAQCollapsed`, with comments explaining each part and guidance on customization options. This example covers how to use various options, including using `null` for skipping values and default values where applicable.

```javascript
// This example shows how to use the `createFAQCollapsed` function to generate a collapsible FAQ section
// Each option is explained, including defaults and the use of `null` for optional properties.

const faqSection = uiKit.createFAQCollapsed({
  // `sectionTag`: Optional. This is a small label or "tag" displayed at the top of the section.
  // It can be used to give context about the FAQ (e.g., "Frequently Asked Questions").
  // Default: "Section Tag".
  sectionTag: "FAQ",

  // `title`: The main title for the FAQ section. It's displayed prominently at the top.
  // You can use `null` if you want to skip this.
  // Default: "This Is A Reusable Section Header".
  title: "Your Questions, Answered",

  // `subheading`: Optional. A smaller heading that appears under the main title.
  // It provides additional context or a brief introduction to the FAQ.
  // Use `null` if you want to skip this.
  // Default: "Feel Free to Make this subheading your Heading for the section".
  subheading: "Learn more about our services and offerings",

  // `description`: Optional. This is a paragraph displayed under the title and subheading.
  // It's typically used to provide a short description or guidance about the FAQ section.
  // Use `null` to skip adding a description.
  // Default: "Description related to the section in which it is placed comes here."
  description: "We've answered some of the most common questions below.",

  // `faqs`: An array of FAQ items, each with a `question` and an `answer`.
  // There is no default value; you need to provide at least one FAQ item to display.
  // Each item should have:
  // - `question`: The question text (required).
  // - `answer`: The answer text (required).
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
});

// Now we append the generated FAQ section to the body or any specific container on the webpage.
document.body.appendChild(faqSection);
```

### Options Explained

1. **`sectionTag`**: Optional small label/tag at the top of the FAQ section.
   - **Default**: "Section Tag"
   - **Use `null`**: If you don’t want to display a section tag.

2. **`title`**: The main title text, prominently displayed at the top of the FAQ.
   - **Default**: "This Is A Reusable Section Header"
   - **Use `null`**: To skip the title.

3. **`subheading`**: Optional subheading that appears under the title, providing additional context.
   - **Default**: "Feel Free to Make this subheading your Heading for the section"
   - **Use `null`**: To skip the subheading.

4. **`description`**: Optional paragraph under the title and subheading for additional details or guidance.
   - **Default**: "Description related to the section in which it is placed comes here."
   - **Use `null`**: If you don’t want any description text.

5. **`faqs`**: Array of FAQ items, with each containing:
   - **`question`** (string): The FAQ question. This is **required**.
   - **`answer`** (string): The answer to the question. This is **required**.
   - There is **no default** for this array; you need to provide at least one item to display an FAQ section. 

Feel free to customize the options based on your needs! This setup allows you to skip elements by setting them to `null`, ensuring only the desired elements are displayed in the FAQ section.

## `createFAQQuick()`

Certainly! Here’s an example usage of `createFAQQuick`, with beginner-friendly comments explaining each option and their default values.

The `createFAQQuick` component allows you to create a quick-access FAQ section with configurable section headers, descriptions, and a list of FAQs with icons. Let's go through each option step-by-step:

```javascript
// Initialize the FAQ section using `createFAQQuick`
// Here, we set up the FAQ section with some custom options.
// Options we don’t specify will use their default values.

const faqSection = uiKit.createFAQQuick({
  // sectionTag: A short label for the section (appears as a badge).
  // Useful for categorizing content, like "Frequently Asked Questions".
  // Default: "Section Tag"
  sectionTag: "FAQs",

  // title: Main header for the FAQ section. This is prominent.
  // Default: "This Is A Reusable Section Header"
  title: "Common Questions",

  // subheading: Secondary header below the main title.
  // It adds more context. Default is null (won't be shown if omitted).
  subheading: "Quick answers to help you get started",

  // description: A brief introduction to the FAQ section.
  // If not provided, this is skipped. Default: null
  description: "Here are some frequently asked questions to help you understand our services.",

  // iconClass: The CSS class for the icon shown with each question.
  // Default: "fas fa-question-circle" (using Font Awesome icons)
  iconClass: "fas fa-info-circle", // For a different icon, e.g., info icon.

  // iconBgColor: Background color for the icon.
  // Default: "bg-purple-100" (a light purple background)
  iconBgColor: "bg-green-100", // Green background for variety.

  // iconColor: Color for the icon itself.
  // Default: "text-purple-900" (a darker purple)
  iconColor: "text-green-600", // Darker green icon.

  // faqItems: Array of FAQ objects, each containing a question and an answer.
  // - question (string): The question text.
  // - answer (string): The answer text.
  faqItems: [
    {
      question: "Is there a free version of this service?",
      answer: "Yes, we offer a basic version at no cost. Upgrade anytime for more features.",
    },
    {
      question: "How to get started?",
      answer: "Simply sign up, choose a plan, and follow the onboarding process.",
    },
    {
      question: "What if I need help?",
      answer: "Our support team is available 24/7 via email or live chat.",
    },
  ],
});

// Append the FAQ section to the webpage (e.g., inside a div with id "content").
document.getElementById("content").appendChild(faqSection);
```

### Explanation of Options:

- **sectionTag** (default: `"Section Tag"`)  
   - Displays as a small label, often used to indicate the section’s purpose (like “FAQs”).
   - Setting this to `null` will hide it.

- **title** (default: `"This Is A Reusable Section Header"`)  
   - The main header for the FAQ section. Important for context.
   - Set to `null` if you want to exclude the title.

- **subheading** (default: `null`)  
   - A secondary header underneath the main title. Adds further context.
   - If left `null`, it won’t display.

- **description** (default: `null`)  
   - An optional introductory text for the FAQ section. Use to describe the FAQ purpose briefly.

- **iconClass** (default: `"fas fa-question-circle"`)  
   - Specifies the icon class for the icon next to each FAQ question.  
   - This uses Font Awesome classes, but you can replace it with any icon library you’re using.

- **iconBgColor** (default: `"bg-purple-100"`)  
   - Sets the background color for the icon. Use any valid CSS background color class.

- **iconColor** (default: `"text-purple-900"`)  
   - Defines the icon color. Adjust based on your theme or preference.

- **faqItems** (required)  
   - This is an array where each object represents an FAQ with:
     - **question**: The FAQ question text.
     - **answer**: The response to the question.

## `createPricing()`

Here's an example of how to use the `createPricing` component, with comments for beginners. I'll guide you through different options available and provide some defaults where applicable:

```javascript
// Step 1: Define options for the pricing component
const pricingOptions = {
  // Section tag that appears above the title (optional)
  sectionTag: "Our Plans",

  // The main header for this section (required)
  title: "Choose the Plan That’s Right for You",

  // Subheading (optional) - provides additional context below the title
  subheading: "Flexible options tailored to your needs",

  // Description (optional) - appears below the subheading to provide more detail
  description: "Explore our pricing plans and pick the one that fits your business best.",

  // Set color for tick/checkmark icons next to items in each pricing card (optional)
  tickColor: "text-green-500", // Default color is green

  // Array of pricing options (required) - each plan is an object with details
  pricingOptions: [
    {
      // Image for this pricing option (optional) - appears above the title
      imageSrc: "https://dummyimage.com/48x48/4c1d95/ffffff&text=AI",
      imageAlt: "AI Starter Icon", // Alt text for the image, useful for accessibility

      // Title and subtitle of this pricing plan (required)
      title: "AI Starter Kit",
      subtitle: "Essential AI tools for small teams",

      // Short description of this plan (optional)
      description: "Get started with AI tools and models tailored for startups.",

      // Features included in this plan (required) - array of strings
      items: ["12 AI Models", "Cloud-Based Processing", "NLP, Vision, Analytics Use Cases", "Business License"],

      // Text appearing before the price (optional)
      prePriceDescription: "The most cost-effective option. For a long-term relationship with us 🧡",

      // Offer price (required) - displayed in bold
      offerPrice: "$499",

      // Original price (optional) - appears as strikethrough next to the offer price
      originalPrice: "$899",

      // Text appearing below the price (optional)
      postPriceDescription: "Paid quarterly, pause or cancel anytime",

      // Button text and action (required) - button to purchase or subscribe to the plan
      buttonText: "Get Started",
      buttonHandler: () => alert("AI Starter Kit selected"),

      // Badge label (optional) - small badge at the top right of the plan
      badge: "Most Popular",

      // Style classes for background or other custom styling (optional)
      style: "bg-gradient-to-b from-purple-50 to-blue-50",
    },
    {
      // Second plan with similar structure
      imageSrc: "https://dummyimage.com/48x48/4c1d95/ffffff&text=EN",
      imageAlt: "Enterprise AI Icon",
      title: "Enterprise AI Suite",
      subtitle: "Advanced AI tools for large organizations",
      description: "Complete solution with dedicated support and custom integrations.",
      items: ["Advanced AI Models", "Dedicated Support", "Custom Integrations", "Enterprise License"],
      prePriceDescription: "Optimal for scaling AI across large teams.",
      offerPrice: "$1,999",
      postPriceDescription: "Billed monthly, cancel anytime",
      buttonText: "Schedule Demo",
      buttonHandler: () => alert("Enterprise AI Suite selected"),
      style: "bg-gradient-to-b from-blue-50 to-purple-50",
    },
  ],
};

// Step 2: Create the pricing component using the options
const pricingComponent = uiKit.createPricing(pricingOptions);

// Step 3: Append the created pricing component to the body or a specific section of your page
document.body.appendChild(pricingComponent);
```

### Explanation of Options

1. **Section Tag (`sectionTag`)**: Appears above the main title, often used to label the section. It’s optional. Default: `null`.

2. **Title (`title`)**: The main title for the pricing section. **Required**.

3. **Subheading (`subheading`)**: Extra context under the main title, providing detail about the section. Optional. Default: `null`.

4. **Description (`description`)**: A paragraph for additional information below the subheading. Optional. Default: `null`.

5. **Tick Color (`tickColor`)**: Sets the color for checkmarks next to each feature in each pricing plan. Optional. Default: `"text-green-500"`.

6. **Pricing Options (`pricingOptions`)**: An array of objects, where each object represents a pricing plan. Each plan includes:
   - **Image (`imageSrc`, `imageAlt`)**: Optional. The `imageSrc` URL provides the image source, while `imageAlt` gives an accessible description.
   - **Title and Subtitle (`title`, `subtitle`)**: These are required for each plan and describe the plan.
   - **Description (`description`)**: Optional text describing the plan in detail.
   - **Items (`items`)**: An array of features for this plan, displayed as a list with checkmarks. **Required**.
   - **Pre-Price Description (`prePriceDescription`)**: Optional text before the price.
   - **Offer Price (`offerPrice`)**: The main price displayed in bold. **Required**.
   - **Original Price (`originalPrice`)**: Optional strikethrough price for discounts.
   - **Post-Price Description (`postPriceDescription`)**: Optional text under the price.
   - **Button Text and Handler (`buttonText`, `buttonHandler`)**: The button label and function. Button text is required. `buttonHandler` is optional but typically provides functionality.
   - **Badge (`badge`)**: Optional label like "Most Popular" displayed as a small badge.
   - **Style (`style`)**: Optional CSS classes for custom background colors.

This example shows two plans, each with unique configurations. You can add more plans by extending the `pricingOptions` array. This flexibility allows customizing each plan according to the needs of the application.

## `createSocialProof()`

Certainly, here’s an example usage of `createSocialProof` with beginner-friendly comments. I've reviewed the code to ensure accuracy and included explanations for different options and their default values.

```javascript
// Example usage of the createSocialProof component in uiKit
const options = {
  // 'sectionTag' - Optional text displayed at the top of the section as a badge.
  // Default: "Section Tag". Use null or an empty string ("") to hide it.
  sectionTag: "What Our Clients Say",

  // 'title' - The main title for this section. Appears prominently above the reviews.
  // Default: "This Is A Reusable Section Header". Set to null or an empty string ("") to hide it.
  title: "Customer Reviews",

  // 'subheading' - Secondary title below the main title, providing additional context.
  // Default: "Feel Free to Make this subheading your Heading for the section". Set to null or an empty string ("") to hide it.
  subheading: "Real feedback from real people.",

  // 'description' - Description text that appears under the subheading. Adds further detail about the section.
  // Default: "Description related to the section in which it is placed comes here. It is obviously optional. Any element within this section heading section can be skipped."
  // Set to null or an empty string ("") to hide it.
  description: "We are proud to have made a difference in the lives of our customers.",

  // 'reviews' - Array of review objects, where each object represents a customer's review.
  // Each review contains the following keys:
  reviews: [
    {
      // 'rating' - The number of stars given in the review. Should be a number between 1 and 5.
      // Default: 5 (all stars filled in yellow).
      rating: 5,

      // 'text' - The actual text of the review. Describes the customer's experience.
      text: "An amazing platform that helped us streamline our operations significantly!",

      // 'imageSrc' - The URL of the reviewer's profile image. Default: "https://dummyimage.com/48x48/4c1d95/ffffff&text=AA".
      // Set to null or an empty string ("") if you want to hide the image.
      imageSrc: "https://dummyimage.com/48x48/4c1d95/ffffff&text=JD",

      // 'imageAlt' - The alternate text for the reviewer's profile image (used if the image fails to load).
      // Default: "Reviewer image". Provide a descriptive text for accessibility.
      imageAlt: "John Doe's Profile Picture",

      // 'name' - The name of the reviewer.
      name: "John Doe",

      // 'handle' - Optional handle or title (such as social media username or designation) displayed below the name.
      // Default: null. If not required, set to null or an empty string ("").
      handle: "@johndoe",
    },
    {
      rating: 4,
      text: "Great support team and quick response time!",
      imageSrc: "https://dummyimage.com/48x48/4c1d95/ffffff&text=JD",
      imageAlt: "Jane Doe's Profile Picture",
      name: "Jane Doe",
      handle: "@janedoe",
    },
  ],
};

// Append the social proof section to the document
document.body.appendChild(uiKit.createSocialProof(options));
```

### Explanation of Options:

1. **`sectionTag`**: Optional. Displays a small tag or label above the title. The default is `"Section Tag"`. You can set it to `null` or an empty string (`""`) to hide it.
  
2. **`title`**: Optional. The main title of the section. The default is `"This Is A Reusable Section Header"`. If no title is needed, set this to `null` or `""`.

3. **`subheading`**: Optional. Displays a secondary heading below the title, offering additional context. The default is `"Feel Free to Make this subheading your Heading for the section"`. Set to `null` or `""` to hide.

4. **`description`**: Optional. Description text appears below the subheading. The default is `"Description related to the section in which it is placed comes here. It is obviously optional. Any element within this section heading section can be skipped."`. Set it to `null` or `""` if unnecessary.

5. **`reviews`**: An array of review objects, each representing an individual review with these keys:
    - **`rating`**: The number of stars (1-5). The default is 5 stars if not provided.
    - **`text`**: The review text, required.
    - **`imageSrc`**: Optional. The URL for the reviewer’s profile image. Default is `"https://dummyimage.com/48x48/4c1d95/ffffff&text=AA"`. Set it to `null` or `""` if no image is needed.
    - **`imageAlt`**: Alternate text for the image, useful for accessibility. Default is `"Reviewer image"`.
    - **`name`**: The reviewer's name, required.
    - **`handle`**: Optional. A title, handle, or social media username below the name. Set to `null` if not required.

This setup provides flexibility to showcase customer reviews with different configurations, making it adaptable to various content styles.

## `createFooter()`

Here's an example of how to use `createFooter` from the `uiKit`, with detailed explanations for beginners on customizing each option. I’ve checked each option carefully to ensure the guidance is accurate.

```javascript
// Example usage of createFooter with detailed comments

// Setting up options to customize the footer
const footerOptions = {
  // 'logo': An object defining the logo's image source and alternative text.
  // This will appear in the footer's brand section. 
  // Default: a placeholder logo is provided if you don't set this option.
  logo: {
    src: "https://example.com/logo.png",  // Replace with your logo's URL
    alt: "Example Company",              // A brief description for accessibility
  },

  // 'description': A short description that appears under the logo.
  // Useful for describing your company's mission or values.
  // Default: "Empowering businesses through intelligent transformation..."
  description: "Transforming businesses with AI and data solutions.",

  // 'socialLinks': An array of social media links.
  // Each link is an object with 'iconClass' and 'href' properties.
  // - 'iconClass': the icon's CSS class for Font Awesome (or other icon libraries).
  // - 'href': the link's destination.
  // Default: LinkedIn, Twitter, GitHub, and Instagram placeholder links.
  socialLinks: [
    { iconClass: "fab fa-linkedin-in", href: "https://linkedin.com/company/example" },
    { iconClass: "fab fa-twitter", href: "https://twitter.com/example" },
    { iconClass: "fab fa-facebook", href: "https://facebook.com/example" },
  ],

  // 'footerSections': Defines different sections with links in the footer.
  // Each section is an object with a 'title' and an array of 'links'.
  // - 'title': The title of the section.
  // - 'links': Each link includes 'text' (the link's label) and 'href' (URL).
  // Default: "SERVICES" and "COMPANY" sections with placeholder links.
  footerSections: {
    services: {
      title: "SERVICES",
      links: [
        { text: "AI Strategy", href: "#ai-strategy" },
        { text: "Consulting", href: "#consulting" },
        { text: "Support", href: "#support" },
      ],
    },
    company: {
      title: "COMPANY",
      links: [
        { text: "About Us", href: "#about" },
        { text: "Our Team", href: "#team" },
        { text: "Careers", href: "#careers" },
      ],
    },
  },

  // 'newsletter': Settings for the newsletter subscription section.
  // - 'title': The heading for the newsletter section.
  // - 'text': A brief description for the section.
  // - 'placeholder': Placeholder text for the email input field.
  // - 'subscribeText': The text for the subscribe button.
  // - 'agreementText': Informational text about subscription privacy.
  // - 'onSubscribe': A function that receives the email input upon subscription.
  // Default: "Subscribe to our newsletter for AI insights..." with placeholder text.
  newsletter: {
    title: "Join Our Newsletter",
    text: "Stay updated with our latest insights and offers.",
    placeholder: "Enter your email",
    subscribeText: "Sign Up",
    agreementText: "We respect your privacy and will never spam.",
    onSubscribe: (email) => {
      console.log(`Subscribed with email: ${email}`);
    },
  },

  // 'legalLinks': Links for legal pages, such as "Privacy Policy" and "Terms of Service."
  // Each link is an object with 'text' and 'href'.
  // Default: Privacy Policy, Terms of Service, Cookie Settings, and Accessibility.
  legalLinks: [
    { text: "Privacy Policy", href: "/privacy-policy" },
    { text: "Terms of Service", href: "/terms" },
  ],

  // 'certifications': An array of certifications to display in the footer.
  // Each certification includes 'src' (image URL) and 'alt' (description).
  // Default: Placeholder certifications like ISO and GDPR.
  certifications: [
    { src: "https://example.com/cert1.png", alt: "ISO Certification" },
    { src: "https://example.com/cert2.png", alt: "Data Privacy Compliance" },
  ],
};

// Create the footer using the options above
const footerElement = uiKit.createFooter(footerOptions);

// Append the generated footer element to the page
document.body.appendChild(footerElement);
```

### Additional Notes for Beginners

1. **Optional Customization**: You can exclude any option if it isn’t needed. The component has default values, so if you skip adding an option (e.g., `logo` or `socialLinks`), it will use its placeholder content.

2. **Using Null Values**: If you don’t want a section, you can set its value to `null`. For example:
   ```javascript
   legalLinks: null, // This will remove the legal links section
   ```

3. **onSubscribe Function**: This function receives the entered email upon subscription. You can modify it to handle emails as needed, such as sending them to a server.

Each option gives flexibility for customizing your footer, whether you need a simple setup or a more comprehensive, branded footer with multiple sections and links.