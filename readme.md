Here's a `README.md` file for your "Landing Page UI Kit" library:
# Landing Page UI Kit

A reusable UI components library in Vanilla JavaScript designed for creating clean, responsive landing pages without dependencies. This kit includes essential components for a landing page, such as navigation bars, hero sections, lead capture sections, and footers.

## Installation

Install via npm:

```bash
npm install landing-page-ui-kit
```

Or, directly include via CDN:

```html
<script src="https://unpkg.com/landing-page-ui-kit@1.0.0/landing-page-ui-kit.js"></script>
```

## Usage

Each component can be used by calling functions provided in the library. Components can be added to the DOM by appending them to the `document.body` or a specific element in your page.

### Example

```html
<script src="https://unpkg.com/landing-page-ui-kit@1.0.0/landing-page-ui-kit.js"></script>
<script>
  document.body.appendChild(LandingPageUI.createNavigation({
    logo: { src: "https://dummyimage.com/180x60/4c1d95/ffffff&text=YourSITE", alt: "YourSITE", href: "/" },
    links: [{ text: "Home", href: "#" }, { text: "About", href: "#" }]
  }));
  document.body.appendChild(LandingPageUI.createHeroSection({ welcomeText: "Welcome to Our Site" }));
  document.body.appendChild(LandingPageUI.createLeadCaptureSection({ title: "Stay Updated" }));
  document.body.appendChild(LandingPageUI.createFooter());
</script>
```

## Components

### `createNavigation(options)`

A customizable navigation bar with options for logo, links, action buttons, and responsive behavior.

#### Options

- **logo**: Object with `src`, `alt`, and `href`.
- **links**: Array of objects with `text` and `href`.
- **actionButtons**: Array of objects with `text`, `href`, `color`, and optional `handler`.
- **menuToggleColor**: Color for the mobile menu toggle icon.
- **onScrollHide**: Boolean to hide navigation on scroll.

### `createHeroSection(options)`

A hero section featuring a title, subtitle, buttons, and an image.

#### Options

- **welcomeText**: String displayed as a badge above the title.
- **title**: Primary heading text.
- **highlightedText**: Highlighted part of the title.
- **subtitle**: Supporting text below the title.
- **buttons**: Array of objects with `text`, `href`, and `color`.
- **rating**: Object with `stars` and `text`.
- **enterprisesServed**: Object with `count` and `description`.
- **image**: Object with `src` and `alt`.

### `createLeadCaptureSection(options)`

A lead capture section with a customizable form and feature list.

#### Options

- **sectionTag**: Tagline displayed at the top.
- **title**: Section title.
- **subheading**: Section subheading.
- **description**: Description text for the section.
- **formFields**: Array of form field objects, including type and placeholder.
- **buttonText**: Text for the submit button.
- **onSubmit**: Callback function triggered on form submission.
- **features**: Array of feature objects with `iconClass`, `iconBgColor`, `iconColor`, `title`, and `description`.

### `createFooter(options)`

A customizable footer with social links, navigation links, and a newsletter subscription form.

#### Options

- **logo**: Object with `src` and `alt`.
- **description**: Short description or tagline for the footer.
- **socialLinks**: Array of objects with `iconClass` and `href`.
- **footerSections**: Object containing sections (e.g., services and company) with title and links.
- **newsletter**: Newsletter subscription form settings, including `title`, `text`, `placeholder`, `subscribeText`, `agreementText`, and `onSubscribe`.
- **legalLinks**: Array of links with `text` and `href`.
- **certifications**: Array of objects with `src` and `alt`.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

