const uiKit = (() => {
  function createNavigation(options = {}) {
    // Set default options
    const {
      logo = { src: "https://dummyimage.com/180x60/4c1d95/ffffff&text=YourSITE", alt: "YourSITE", href: "/" },
      links = [
        { text: "Services", href: "#services" },
        { text: "Process", href: "#process" },
        { text: "Clients", href: "#clients" },
        { text: "Team", href: "#team" },
      ],
      actionButtons = [
        { text: "Contact Us", href: "#contact", color: "border-2 border-purple-900 text-purple-900 hover:bg-purple-50", handler: null },
        { text: "Get Demo", href: "#demo", color: "border-2 border-purple-900 bg-purple-900 text-white hover:bg-purple-800", handler: null },
      ],
      menuToggleColor = "bg-purple-900",
      onScrollHide = true,
    } = options;

    // Create main nav container
    const nav = document.createElement("nav");
    nav.className = "fixed bg-white top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50";

    // Logo element
    const logoContainer = document.createElement("a");
    logoContainer.href = logo.href || "/";
    logoContainer.className = "flex-shrink-0";
    const logoImg = document.createElement("img");
    logoImg.src = logo.src;
    logoImg.alt = logo.alt;
    logoImg.className = "h-10";
    logoContainer.appendChild(logoImg);

    // Desktop menu links
    const desktopMenu = document.createElement("div");
    desktopMenu.className = "hidden lg:flex items-center space-x-8";

    const linksContainer = document.createElement("div");
    linksContainer.className = "flex space-x-8";
    links.forEach((link) => {
      const linkElem = document.createElement("a");
      linkElem.href = link.href;
      linkElem.className = "text-gray-600 hover:text-purple-900";
      linkElem.textContent = link.text;
      linksContainer.appendChild(linkElem);
    });

    // Action buttons
    const buttonsContainer = document.createElement("div");
    buttonsContainer.className = "flex items-center space-x-4";
    actionButtons.forEach((button) => {
      const buttonElem = document.createElement("a");
      buttonElem.href = button.href;
      buttonElem.className = `px-4 py-2 rounded-md ${button.color}`;
      buttonElem.textContent = button.text;
      if (button.handler) {
        buttonElem.addEventListener("click", button.handler);
      }
      buttonsContainer.appendChild(buttonElem);
    });

    desktopMenu.appendChild(linksContainer);
    desktopMenu.appendChild(buttonsContainer);

    // Mobile menu button
    const menuBtn = document.createElement("button");
    menuBtn.id = "menuBtn";
    menuBtn.className = "lg:hidden p-2";
    menuBtn.setAttribute("aria-label", "Menu");
    [1, 2, 3].forEach(() => {
      const line = document.createElement("div");
      line.className = `w-6 h-0.5 ${menuToggleColor} mb-1.5`;
      menuBtn.appendChild(line);
    });

    // Mobile menu
    const mobileMenu = document.createElement("div");
    mobileMenu.id = "mobileMenu";
    mobileMenu.className = "hidden lg:hidden bg-white border-t border-gray-200";
    const mobileLinksContainer = document.createElement("div");
    mobileLinksContainer.className = "px-4 py-2 space-y-2";

    links.forEach((link) => {
      const linkElem = document.createElement("a");
      linkElem.href = link.href;
      linkElem.className = "block py-2 text-gray-600";
      linkElem.textContent = link.text;
      linkElem.addEventListener("click", () => mobileMenu.classList.add("hidden"));
      mobileLinksContainer.appendChild(linkElem);
    });

    // Mobile action buttons
    actionButtons.forEach((button) => {
      const buttonElem = document.createElement("a");
      buttonElem.href = button.href;
      buttonElem.className = `block py-2 px-4 rounded-md text-center ${button.color}`;
      buttonElem.textContent = button.text;
      if (button.handler) {
        buttonElem.addEventListener("click", button.handler);
      }
      buttonElem.addEventListener("click", () => mobileMenu.classList.add("hidden"));
      mobileLinksContainer.appendChild(buttonElem);
    });

    mobileMenu.appendChild(mobileLinksContainer);

    // Menu toggle functionality
    menuBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });

    // Append elements
    const navContainer = document.createElement("div");
    navContainer.className = "max-w-7xl mx-auto px-4 flex justify-between items-center h-16";
    navContainer.appendChild(logoContainer);
    navContainer.appendChild(desktopMenu);
    navContainer.appendChild(menuBtn);
    nav.appendChild(navContainer);
    nav.appendChild(mobileMenu);

    // Scroll hide/show functionality
    if (onScrollHide) {
      let lastScroll = 0;
      window.addEventListener("scroll", () => {
        const currentScroll = window.pageYOffset;
        if (currentScroll > lastScroll && currentScroll > 100) {
          nav.style.transform = "translateY(-100%)";
        } else {
          nav.style.transform = "translateY(0)";
        }
        lastScroll = currentScroll;
      });
    }

    return nav;
  }

  function createHeroSection(options = {}) {
    const {
      welcomeText = "Welcome to YourSITE Consulting",
      title = "Transform Your Business with",
      highlightedText = "Intelligent Solutions",
      subtitle = "Leverage cutting-edge artificial intelligence to streamline operations, enhance decision-making, and drive unprecedented growth for your enterprise.",
      buttons = [
        { text: "Watch Demo", href: "#demo", color: "bg-purple-900 text-white hover:bg-purple-800" },
        { text: "Get Started", href: "#contact", color: "border-2 border-purple-900 text-purple-900 hover:bg-purple-50" },
      ],
      rating = { stars: "5.0", text: "5.0 rating on Clutch" },
      enterprisesServed = { count: "500+", description: "enterprises served" },
      image = {
        src: "https://dummyimage.com/600x500/4c1d95/ffffff&text=AI+Platform+Interface",
        alt: "AI Platform Interface",
      },
    } = options;

    // Create the main section
    const section = document.createElement("section");
    section.className = "pt-32 pb-20 px-4";

    // Container div
    const container = document.createElement("div");
    container.className = "max-w-7xl mx-auto";

    // Grid wrapper
    const gridWrapper = document.createElement("div");
    gridWrapper.className = "lg:grid lg:grid-cols-2 lg:gap-12 items-center";

    // Text Content
    const textContent = document.createElement("div");
    textContent.className = "max-w-xl";

    // Welcome Text Badge
    const welcomeBadge = document.createElement("span");
    welcomeBadge.className = "inline-block px-4 py-1 bg-purple-50 text-purple-900 text-sm font-semibold rounded-full uppercase tracking-wide mb-4";
    welcomeBadge.textContent = welcomeText;

    // Title with Highlighted Text
    const titleElem = document.createElement("h1");
    titleElem.className = "text-4xl lg:text-5xl font-bold mb-6";
    titleElem.innerHTML = `${title} <span class="text-purple-900 relative">${highlightedText}<span class="absolute bottom-0 left-0 w-full h-2 bg-blue-200 opacity-50 -z-10"></span></span>`;

    // Subtitle
    const subtitleElem = document.createElement("p");
    subtitleElem.className = "text-gray-600 text-lg mb-8";
    subtitleElem.textContent = subtitle;

    // Buttons
    const buttonContainer = document.createElement("div");
    buttonContainer.className = "flex flex-wrap gap-4 mb-8";
    buttons.forEach((button) => {
      const buttonElem = document.createElement("a");
      buttonElem.href = button.href;
      buttonElem.className = `px-6 py-3 rounded-md transition-colors ${button.color}`;
      buttonElem.textContent = button.text;
      buttonContainer.appendChild(buttonElem);
    });

    // Rating and Enterprise Served
    const statsContainer = document.createElement("div");
    statsContainer.className = "flex flex-wrap items-center gap-6 pt-6 border-t border-gray-200";

    // Rating
    const ratingContainer = document.createElement("div");
    ratingContainer.className = "flex items-center gap-2";

    // Extract star count from the first number in the rating text
    const starCount = parseInt(rating.stars, 10) || 0;
    const stars = document.createElement("div");
    stars.className = "text-blue-500";
    stars.innerHTML = "★".repeat(starCount).padEnd(5, "☆"); // Full stars and empty stars for 5-star scale

    const ratingText = document.createElement("span");
    ratingText.className = "text-sm text-gray-600";
    ratingText.textContent = rating.text;

    ratingContainer.appendChild(stars);
    ratingContainer.appendChild(ratingText);

    // Divider
    const divider = document.createElement("div");
    divider.className = "w-px h-6 bg-gray-200";

    // Enterprises Served
    const enterpriseContainer = document.createElement("div");
    const enterpriseCount = document.createElement("span");
    enterpriseCount.className = "text-xl font-bold";
    enterpriseCount.textContent = enterprisesServed.count;
    const enterpriseText = document.createElement("span");
    enterpriseText.className = "text-sm text-gray-600 ml-2";
    enterpriseText.textContent = enterprisesServed.description;
    enterpriseContainer.appendChild(enterpriseCount);
    enterpriseContainer.appendChild(enterpriseText);

    // Append elements to stats container
    statsContainer.appendChild(ratingContainer);
    statsContainer.appendChild(divider);
    statsContainer.appendChild(enterpriseContainer);

    // Append text elements to text content
    textContent.appendChild(welcomeBadge);
    textContent.appendChild(titleElem);
    textContent.appendChild(subtitleElem);
    textContent.appendChild(buttonContainer);
    textContent.appendChild(statsContainer);

    // Image Content
    const imageContainer = document.createElement("div");
    imageContainer.className = "mt-12 lg:mt-0 relative float";
    const imageWrapper = document.createElement("div");
    imageWrapper.className = "relative rounded-xl overflow-hidden shadow-2xl";

    const imgElem = document.createElement("img");
    imgElem.src = image.src;
    imgElem.alt = image.alt;
    imgElem.className = "w-full";

    // Decorative Elements
    const decorativeCircle1 = document.createElement("div");
    decorativeCircle1.className = "absolute -right-5 -top-5 w-32 h-32 bg-gray-200 opacity-20 rounded-full";
    const decorativeCircle2 = document.createElement("div");
    decorativeCircle2.className = "absolute -left-10 -bottom-10 w-44 h-44 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full opacity-50";

    // Append elements to image container
    imageWrapper.appendChild(imgElem);
    imageWrapper.appendChild(decorativeCircle1);
    imageWrapper.appendChild(decorativeCircle2);
    imageContainer.appendChild(imageWrapper);

    // Append text content and image to grid wrapper
    gridWrapper.appendChild(textContent);
    gridWrapper.appendChild(imageContainer);

    // Append grid wrapper to container
    container.appendChild(gridWrapper);

    // Append container to section
    section.appendChild(container);

    return section;
  }

  function createLeadCaptureSection(options = {}) {
    const {
      sectionTag = "Section Tag",
      title = "This Is A Reusable Section Header",
      subheading = "Feel Free to Make this subheading your Heading for the section",
      description = "Description related to the section in which it is placed comes here. It is obviously optional. Any element within this section heading section can be skipped.",
      formFields = [
        { type: "text", placeholder: "First Name" },
        { type: "text", placeholder: "Last Name" },
        { type: "email", placeholder: "Email" },
        { type: "tel", placeholder: "Phone Number" },
        { type: "text", placeholder: "Company" },
        { type: "select", placeholder: "Select a Country", options: ["United States", "United Kingdom", "Canada", "Australia"] },
      ],
      buttonText = "Get Started",
      buttonClass = "w-full py-3 px-6 bg-purple-900 text-white rounded-md hover:bg-purple-800 transition-colors font-medium",
      onSubmit = (data) => console.log("Form submitted with data:", data),
      features = [
        {
          iconClass: "fas fa-shopping-cart",
          iconBgColor: "bg-blue-100",
          iconColor: "text-blue-500",
          title: "AI-Powered Analytics",
          description: "Transform your data into actionable insights with our advanced AI analytics platform. Make informed decisions faster.",
        },
        {
          iconClass: "fas fa-envelope",
          iconBgColor: "bg-purple-100",
          iconColor: "text-purple-500",
          title: "Process Automation",
          description: "Streamline your operations with intelligent automation solutions that reduce costs and improve efficiency.",
        },
        {
          iconClass: "fas fa-video",
          iconBgColor: "bg-indigo-100",
          iconColor: "text-indigo-500",
          title: "Predictive Modeling",
          description: "Leverage machine learning to forecast trends and prepare for future market conditions.",
        },
        {
          iconClass: "fas fa-camera",
          iconBgColor: "bg-pink-100",
          iconColor: "text-pink-500",
          title: "Custom AI Solutions",
          description: "Tailored artificial intelligence solutions designed specifically for your business needs.",
        },
      ],
    } = options;

    const section = document.createElement("section");
    section.className = "py-16 px-4 bg-purple-50/50";

    // Section Title
    const titleContainer = document.createElement("div");
    titleContainer.className = "max-w-7xl mx-auto text-center mb-12";

    const tagElem = document.createElement("span");
    tagElem.className = "inline-block px-4 py-1 bg-purple-50 text-purple-900 text-sm font-semibold rounded-full uppercase tracking-wide mb-4";
    tagElem.textContent = sectionTag;

    const titleElem = document.createElement("h2");
    titleElem.className = "text-4xl lg:text-5xl font-bold mb-6";
    titleElem.textContent = title;

    const subheadingElem = document.createElement("h3");
    subheadingElem.className = "text-3xl font-bold text-center mb-6";
    subheadingElem.textContent = subheading;

    const descriptionElem = document.createElement("p");
    descriptionElem.className = "text-gray-600 text-lg max-w-3xl mx-auto mb-6";
    descriptionElem.textContent = description;

    titleContainer.appendChild(tagElem);
    titleContainer.appendChild(titleElem);
    titleContainer.appendChild(subheadingElem);
    titleContainer.appendChild(descriptionElem);
    section.appendChild(titleContainer);

    // Form and Features Container
    const container = document.createElement("div");
    container.className = "max-w-7xl mx-auto lg:grid lg:grid-cols-2 lg:gap-12 items-start";

    // Form Column
    const formColumn = document.createElement("div");
    formColumn.className = "max-w-xl";

    const form = document.createElement("form");
    form.className = "space-y-4";

    formFields.forEach((field) => {
      let inputElem;
      if (field.type === "select") {
        inputElem = document.createElement("select");
        inputElem.className = "w-full p-3 rounded-md border border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all text-gray-500";
        inputElem.placeholder = field.placeholder;

        const defaultOption = document.createElement("option");
        defaultOption.value = "";
        defaultOption.textContent = field.placeholder;
        inputElem.appendChild(defaultOption);

        field.options.forEach((option) => {
          const optionElem = document.createElement("option");
          optionElem.value = option;
          optionElem.textContent = option;
          inputElem.appendChild(optionElem);
        });
      } else {
        inputElem = document.createElement("input");
        inputElem.type = field.type;
        inputElem.placeholder = field.placeholder;
        inputElem.className = "w-full p-3 rounded-md border border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all";
      }
      form.appendChild(inputElem);
    });

    const submitButton = document.createElement("button");
    submitButton.type = "button";
    submitButton.className = buttonClass;
    submitButton.textContent = buttonText;

    // Form submit handler
    submitButton.addEventListener("click", () => {
      const formData = Array.from(form.elements)
        .filter((el) => el.tagName !== "BUTTON")
        .reduce((acc, el) => {
          acc[el.placeholder || el.name] = el.value;
          return acc;
        }, {});
      onSubmit(formData);
    });

    form.appendChild(submitButton);
    formColumn.appendChild(form);
    container.appendChild(formColumn);

    // Features Column
    const featuresColumn = document.createElement("div");
    featuresColumn.className = "mt-12 lg:mt-0 space-y-8";

    features.forEach((feature) => {
      const featureContainer = document.createElement("div");
      featureContainer.className = "flex gap-4";

      const iconContainer = document.createElement("div");
      iconContainer.className = `flex-shrink-0 w-12 h-12 ${feature.iconBgColor} rounded-lg flex items-center justify-center`;

      const iconElem = document.createElement("i");
      iconElem.className = `${feature.iconClass} ${feature.iconColor} text-xl`;
      iconContainer.appendChild(iconElem);

      const featureText = document.createElement("div");
      const featureTitle = document.createElement("h3");
      featureTitle.className = "text-xl font-semibold mb-2";
      featureTitle.textContent = feature.title;

      const featureDescription = document.createElement("p");
      featureDescription.className = "text-gray-600";
      featureDescription.textContent = feature.description;

      featureText.appendChild(featureTitle);
      featureText.appendChild(featureDescription);

      featureContainer.appendChild(iconContainer);
      featureContainer.appendChild(featureText);
      featuresColumn.appendChild(featureContainer);
    });

    container.appendChild(featuresColumn);
    section.appendChild(container);

    return section;
  }

  function createFooter(options = {}) {
    const {
      logo = { src: "https://dummyimage.com/180x60/4c1d95/ffffff&text=YourSITE", alt: "YourSITE" },
      description = "Empowering businesses through intelligent transformation. We bridge the gap between human expertise and artificial intelligence.",
      socialLinks = [
        { iconClass: "fab fa-linkedin-in", href: "#" },
        { iconClass: "fab fa-twitter", href: "#" },
        { iconClass: "fab fa-github", href: "#" },
        { iconClass: "fab fa-instagram", href: "#" },
      ],
      footerSections = {
        services: { title: "SERVICES", links: ["AI Strategy", "Implementation", "Training & Support", "Data Analytics", "Custom Solutions"].map((text) => ({ text, href: "#" })) },
        company: { title: "COMPANY", links: ["About Us", "Our Team", "Careers", "Blog", "Press Kit"].map((text) => ({ text, href: "#" })) },
      },
      newsletter = {
        title: "STAY UPDATED",
        text: "Subscribe to our newsletter for AI insights, company updates, and industry news.",
        placeholder: "Enter your email",
        subscribeText: "Subscribe",
        agreementText: "We will never spam. That’s our promise.",
        onSubscribe: (email) => console.log(`Subscribed with email: ${email}`),
      },
      legalLinks = [
        { text: "Privacy Policy", href: "#" },
        { text: "Terms of Service", href: "#" },
        { text: "Cookie Settings", href: "#" },
        { text: "Accessibility", href: "#" },
      ],
      certifications = [
        { src: "https://dummyimage.com/60x30/4CAF50/ffffff&text=ISO", alt: "ISO Certification" },
        { src: "https://dummyimage.com/60x30/2196F3/ffffff&text=SOC2", alt: "SOC2 Certification" },
        { src: "https://dummyimage.com/60x30/F44336/ffffff&text=GDPR", alt: "GDPR Compliant" },
      ],
    } = options;

    const footer = document.createElement("footer");
    footer.className = "bg-gray-900 text-gray-300 py-16 px-4";

    const container = document.createElement("div");
    container.className = "max-w-7xl mx-auto";

    // Main footer grid
    const footerGrid = document.createElement("div");
    footerGrid.className = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12";

    // Brand Column
    const brandColumn = document.createElement("div");
    brandColumn.className = "lg:col-span-1";

    const logoImg = document.createElement("img");
    logoImg.src = logo.src;
    logoImg.alt = logo.alt;
    logoImg.className = "h-10 mb-6";
    brandColumn.appendChild(logoImg);

    const descriptionElem = document.createElement("p");
    descriptionElem.className = "text-gray-400 mb-6";
    descriptionElem.textContent = description;
    brandColumn.appendChild(descriptionElem);

    // Social Links
    const socialLinksContainer = document.createElement("div");
    socialLinksContainer.className = "flex space-x-4";
    socialLinks.forEach((link) => {
      const socialLink = document.createElement("a");
      socialLink.href = link.href;
      socialLink.className = "w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-purple-900 transition-colors";
      socialLink.innerHTML = `<i class="${link.iconClass}"></i>`;
      socialLinksContainer.appendChild(socialLink);
    });
    brandColumn.appendChild(socialLinksContainer);

    // Services and Company Sections
    const createSection = (section) => {
      const sectionDiv = document.createElement("div");
      const sectionTitle = document.createElement("h3");
      sectionTitle.className = "text-white font-semibold mb-4";
      sectionTitle.textContent = section.title;
      sectionDiv.appendChild(sectionTitle);

      const linkList = document.createElement("ul");
      linkList.className = "space-y-3";
      section.links.forEach((link) => {
        const listItem = document.createElement("li");
        const anchor = document.createElement("a");
        anchor.href = link.href;
        anchor.className = "hover:text-white transition-colors";
        anchor.textContent = link.text;
        listItem.appendChild(anchor);
        linkList.appendChild(listItem);
      });
      sectionDiv.appendChild(linkList);
      return sectionDiv;
    };

    footerGrid.appendChild(brandColumn);
    footerGrid.appendChild(createSection(footerSections.services));
    footerGrid.appendChild(createSection(footerSections.company));

    // Newsletter Column
    const newsletterColumn = document.createElement("div");
    newsletterColumn.className = "lg:col-span-2";

    const newsletterTitle = document.createElement("h3");
    newsletterTitle.className = "text-white font-semibold mb-4";
    newsletterTitle.textContent = newsletter.title;
    newsletterColumn.appendChild(newsletterTitle);

    const newsletterText = document.createElement("p");
    newsletterText.className = "text-sm text-gray-400 mb-4";
    newsletterText.textContent = newsletter.text;
    newsletterColumn.appendChild(newsletterText);

    const newsletterForm = document.createElement("form");
    newsletterForm.className = "space-y-4";

    const formGroup = document.createElement("div");
    formGroup.className = "flex rounded overflow-hidden";

    const emailInput = document.createElement("input");
    emailInput.type = "email";
    emailInput.placeholder = newsletter.placeholder;
    emailInput.className = "flex-1 bg-white text-gray-700 px-4 py-2 border border-gray-300 rounded-l focus:outline-none focus:ring-1 focus:ring-purple-500";
    formGroup.appendChild(emailInput);

    const subscribeButton = document.createElement("button");
    subscribeButton.type = "button"; // Avoid default form submission
    subscribeButton.className = "bg-purple-600 text-white px-4 py-2 hover:bg-purple-500 transition-colors rounded-r";
    subscribeButton.textContent = newsletter.subscribeText;

    // Subscribe button handler
    subscribeButton.addEventListener("click", () => {
      const email = emailInput.value;
      newsletter.onSubscribe(email); // Pass email value to handler
    });

    formGroup.appendChild(subscribeButton);
    newsletterForm.appendChild(formGroup);

    // Agreement Text
    const agreementText = document.createElement("p");
    agreementText.className = "text-xs text-gray-400 mt-2";
    agreementText.textContent = newsletter.agreementText;
    newsletterForm.appendChild(agreementText);

    newsletterColumn.appendChild(newsletterForm);
    footerGrid.appendChild(newsletterColumn);
    container.appendChild(footerGrid);

    // Footer Bottom Section
    const footerBottom = document.createElement("div");
    footerBottom.className = "pt-8 border-t border-gray-800";

    const footerBottomContainer = document.createElement("div");
    footerBottomContainer.className = "flex flex-col lg:flex-row justify-between items-center gap-4";

    const copyright = document.createElement("div");
    copyright.className = "text-sm";
    copyright.textContent = "© 2024 YourSITE. All rights reserved.";

    const legalLinksContainer = document.createElement("div");
    legalLinksContainer.className = "flex flex-wrap gap-6 text-sm";
    legalLinks.forEach((link) => {
      const legalLink = document.createElement("a");
      legalLink.href = link.href;
      legalLink.className = "hover:text-white transition-colors";
      legalLink.textContent = link.text;
      legalLinksContainer.appendChild(legalLink);
    });

    const certificationsContainer = document.createElement("div");
    certificationsContainer.className = "flex gap-4";
    certifications.forEach((certification) => {
      const certImg = document.createElement("img");
      certImg.src = certification.src;
      certImg.alt = certification.alt;
      certImg.className = "h-8";
      certificationsContainer.appendChild(certImg);
    });

    footerBottomContainer.appendChild(copyright);
    footerBottomContainer.appendChild(legalLinksContainer);
    footerBottomContainer.appendChild(certificationsContainer);
    footerBottom.appendChild(footerBottomContainer);
    container.appendChild(footerBottom);

    footer.appendChild(container);
    return footer;
  }

  return {
    createNavigation,
    createHeroSection,
    createLeadCaptureSection,
    createFooter,
  };
})();
