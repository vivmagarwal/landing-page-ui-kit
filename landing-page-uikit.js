const getTailwindColor = (colorName, trimHash = true) => {
  // Convert input to kebab case and lowercase for matching
  const normalizedInput = colorName
    .toLowerCase()
    // Convert camelCase to kebab-case
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .toLowerCase()
    // Convert spaces to dashes
    .replace(/\s+/g, "-")
    // Handle special cases
    .replace("bluegray", "blue-gray")
    .replace("coolgray", "cool-gray")
    .replace("truegray", "true-gray")
    .replace("warmgray", "warm-gray");

  const tailwindColors = {
    // Cool Gray
    "cool-gray-50": "#f9fafb",
    "cool-gray-100": "#f3f4f6",
    "cool-gray-200": "#e5e7eb",
    "cool-gray-300": "#d1d5db",
    "cool-gray-400": "#9ca3af",
    "cool-gray-500": "#6b7280",
    "cool-gray-600": "#4b5563",
    "cool-gray-700": "#374151",
    "cool-gray-800": "#1f2937",
    "cool-gray-900": "#111827",

    // Blue Gray
    "blue-gray-50": "#f8fafc",
    "blue-gray-100": "#f1f5f9",
    "blue-gray-200": "#e2e8f0",
    "blue-gray-300": "#cbd5e1",
    "blue-gray-400": "#94a3b8",
    "blue-gray-500": "#64748b",
    "blue-gray-600": "#475569",
    "blue-gray-700": "#334155",
    "blue-gray-800": "#1e293b",
    "blue-gray-900": "#0f172a",

    // True Gray
    "true-gray-50": "#fafafa",
    "true-gray-100": "#f5f5f5",
    "true-gray-200": "#e5e5e5",
    "true-gray-300": "#d4d4d4",
    "true-gray-400": "#a3a3a3",
    "true-gray-500": "#737373",
    "true-gray-600": "#525252",
    "true-gray-700": "#404040",
    "true-gray-800": "#262626",
    "true-gray-900": "#171717",

    // Warm Gray
    "warm-gray-50": "#fafaf9",
    "warm-gray-100": "#f5f5f4",
    "warm-gray-200": "#e7e5e4",
    "warm-gray-300": "#d6d3d1",
    "warm-gray-400": "#a8a29e",
    "warm-gray-500": "#78716c",
    "warm-gray-600": "#57534e",
    "warm-gray-700": "#44403c",
    "warm-gray-800": "#292524",
    "warm-gray-900": "#1c1917",

    // Previous colors remain the same
    "slate-50": "#f8fafc",
    "slate-100": "#f1f5f9",
    "slate-200": "#e2e8f0",
    "slate-300": "#cbd5e1",
    "slate-400": "#94a3b8",
    "slate-500": "#64748b",
    "slate-600": "#475569",
    "slate-700": "#334155",
    "slate-800": "#1e293b",
    "slate-900": "#0f172a",

    "gray-50": "#f9fafb",
    "gray-100": "#f3f4f6",
    "gray-200": "#e5e7eb",
    "gray-300": "#d1d5db",
    "gray-400": "#9ca3af",
    "gray-500": "#6b7280",
    "gray-600": "#4b5563",
    "gray-700": "#374151",
    "gray-800": "#1f2937",
    "gray-900": "#111827",

    "zinc-50": "#fafafa",
    "zinc-100": "#f4f4f5",
    "zinc-200": "#e4e4e7",
    "zinc-300": "#d4d4d8",
    "zinc-400": "#a1a1aa",
    "zinc-500": "#71717a",
    "zinc-600": "#52525b",
    "zinc-700": "#3f3f46",
    "zinc-800": "#27272a",
    "zinc-900": "#18181b",

    "neutral-50": "#fafafa",
    "neutral-100": "#f5f5f5",
    "neutral-200": "#e5e5e5",
    "neutral-300": "#d4d4d4",
    "neutral-400": "#a3a3a3",
    "neutral-500": "#737373",
    "neutral-600": "#525252",
    "neutral-700": "#404040",
    "neutral-800": "#262626",
    "neutral-900": "#171717",

    "stone-50": "#fafaf9",
    "stone-100": "#f5f5f4",
    "stone-200": "#e7e5e4",
    "stone-300": "#d6d3d1",
    "stone-400": "#a8a29e",
    "stone-500": "#78716c",
    "stone-600": "#57534e",
    "stone-700": "#44403c",
    "stone-800": "#292524",
    "stone-900": "#1c1917",

    "red-50": "#fef2f2",
    "red-100": "#fee2e2",
    "red-200": "#fecaca",
    "red-300": "#fca5a5",
    "red-400": "#f87171",
    "red-500": "#ef4444",
    "red-600": "#dc2626",
    "red-700": "#b91c1c",
    "red-800": "#991b1b",
    "red-900": "#7f1d1d",

    "orange-50": "#fff7ed",
    "orange-100": "#ffedd5",
    "orange-200": "#fed7aa",
    "orange-300": "#fdba74",
    "orange-400": "#fb923c",
    "orange-500": "#f97316",
    "orange-600": "#ea580c",
    "orange-700": "#c2410c",
    "orange-800": "#9a3412",
    "orange-900": "#7c2d12",

    "amber-50": "#fffbeb",
    "amber-100": "#fef3c7",
    "amber-200": "#fde68a",
    "amber-300": "#fcd34d",
    "amber-400": "#fbbf24",
    "amber-500": "#f59e0b",
    "amber-600": "#d97706",
    "amber-700": "#b45309",
    "amber-800": "#92400e",
    "amber-900": "#78350f",

    "yellow-50": "#fefce8",
    "yellow-100": "#fef9c3",
    "yellow-200": "#fef08a",
    "yellow-300": "#fde047",
    "yellow-400": "#facc15",
    "yellow-500": "#eab308",
    "yellow-600": "#ca8a04",
    "yellow-700": "#a16207",
    "yellow-800": "#854d0e",
    "yellow-900": "#713f12",

    "lime-50": "#f7fee7",
    "lime-100": "#ecfccb",
    "lime-200": "#d9f99d",
    "lime-300": "#bef264",
    "lime-400": "#a3e635",
    "lime-500": "#84cc16",
    "lime-600": "#65a30d",
    "lime-700": "#4d7c0f",
    "lime-800": "#3f6212",
    "lime-900": "#365314",

    "green-50": "#f0fdf4",
    "green-100": "#dcfce7",
    "green-200": "#bbf7d0",
    "green-300": "#86efac",
    "green-400": "#4ade80",
    "green-500": "#22c55e",
    "green-600": "#16a34a",
    "green-700": "#15803d",
    "green-800": "#166534",
    "green-900": "#14532d",

    "emerald-50": "#ecfdf5",
    "emerald-100": "#d1fae5",
    "emerald-200": "#a7f3d0",
    "emerald-300": "#6ee7b7",
    "emerald-400": "#34d399",
    "emerald-500": "#10b981",
    "emerald-600": "#059669",
    "emerald-700": "#047857",
    "emerald-800": "#065f46",
    "emerald-900": "#064e3b",

    "teal-50": "#f0fdfa",
    "teal-100": "#ccfbf1",
    "teal-200": "#99f6e4",
    "teal-300": "#5eead4",
    "teal-400": "#2dd4bf",
    "teal-500": "#14b8a6",
    "teal-600": "#0d9488",
    "teal-700": "#0f766e",
    "teal-800": "#115e59",
    "teal-900": "#134e4a",

    "cyan-50": "#ecfeff",
    "cyan-100": "#cffafe",
    "cyan-200": "#a5f3fc",
    "cyan-300": "#67e8f9",
    "cyan-400": "#22d3ee",
    "cyan-500": "#06b6d4",
    "cyan-600": "#0891b2",
    "cyan-700": "#0e7490",
    "cyan-800": "#155e75",
    "cyan-900": "#164e63",

    "sky-50": "#f0f9ff",
    "sky-100": "#e0f2fe",
    "sky-200": "#bae6fd",
    "sky-300": "#7dd3fc",
    "sky-400": "#38bdf8",
    "sky-500": "#0ea5e9",
    "sky-600": "#0284c7",
    "sky-700": "#0369a1",
    "sky-800": "#075985",
    "sky-900": "#0c4a6e",

    "blue-50": "#eff6ff",
    "blue-100": "#dbeafe",
    "blue-200": "#bfdbfe",
    "blue-300": "#93c5fd",
    "blue-400": "#60a5fa",
    "blue-500": "#3b82f6",
    "blue-600": "#2563eb",
    "blue-700": "#1d4ed8",
    "blue-800": "#1e40af",
    "blue-900": "#1e3a8a",

    "indigo-50": "#eef2ff",
    "indigo-100": "#e0e7ff",
    "indigo-200": "#c7d2fe",
    "indigo-300": "#a5b4fc",
    "indigo-400": "#818cf8",
    "indigo-500": "#6366f1",
    "indigo-600": "#4f46e5",
    "indigo-700": "#4338ca",
    "indigo-800": "#3730a3",
    "indigo-900": "#312e81",

    "violet-50": "#f5f3ff",
    "violet-100": "#ede9fe",
    "violet-200": "#ddd6fe",
    "violet-300": "#c4b5fd",
    "violet-400": "#a78bfa",
    "violet-500": "#8b5cf6",
    "violet-600": "#7c3aed",
    "violet-700": "#6d28d9",
    "violet-800": "#5b21b6",
    "violet-900": "#4c1d95",

    "purple-50": "#faf5ff",
    "purple-100": "#f3e8ff",
    "purple-200": "#e9d5ff",
    "purple-300": "#d8b4fe",
    "purple-400": "#c084fc",
    "purple-500": "#a855f7",
    "purple-600": "#9333ea",
    "purple-700": "#7e22ce",
    "purple-800": "#6b21a8",
    "purple-900": "#581c87",

    "fuchsia-50": "#fdf4ff",
    "fuchsia-100": "#fae8ff",
    "fuchsia-200": "#f5d0fe",
    "fuchsia-300": "#f0abfc",
    "fuchsia-400": "#e879f9",
    "fuchsia-500": "#d946ef",
    "fuchsia-600": "#c026d3",
    "fuchsia-700": "#a21caf",
    "fuchsia-800": "#86198f",
    "fuchsia-900": "#701a75",

    "pink-50": "#fdf2f8",
    "pink-100": "#fce7f3",
    "pink-200": "#fbcfe8",
    "pink-300": "#f9a8d4",
    "pink-400": "#f472b6",
    "pink-500": "#ec4899",
    "pink-600": "#db2777",
    "pink-700": "#be185d",
    "pink-800": "#9d174d",
    "pink-900": "#831843",

    "rose-50": "#fff1f2",
    "rose-100": "#ffe4e6",
    "rose-200": "#fecdd3",
    "rose-300": "#fda4af",
    "rose-400": "#fb7185",
    "rose-500": "#f43f5e",
    "rose-600": "#e11d48",
    "rose-700": "#be123c",
    "rose-800": "#9f1239",
    "rose-900": "#881337",

    // Base colors
    white: "#ffffff",
    black: "#000000",

    // Support transparent
    transparent: "transparent",
    current: "currentColor",
  };

  const hexCode = tailwindColors[normalizedInput];

  // If color is found and trimHash is true, remove the # (except for special values)
  if (hexCode && trimHash && hexCode.startsWith("#")) {
    return hexCode.slice(1);
  }

  // Return the hex code or original input if not found
  return hexCode || colorName;
};

const uikit = (() => {
  function createNavigation(options = {}) {
    // Default color scheme with sectionBg for larger background blocks
    const colorScheme = {
      primaryColor: "purple-900",
      primaryBg: "purple-100",
      sectionBg: "white", // Default to white for section-wide backgrounds
      textColor: "black",
      subduedTextColor: "text-gray-600",
      solidButtonHover: "purple-700",
      outlineButtonHover: "purple-200",
      ...(options.colorScheme || {}),
    };

    // Set default options
    const {
      logo = { src: `https://dummyimage.com/180x60/${getTailwindColor(colorScheme.primaryColor)}/ffffff&text=YourSITE`, alt: "YourSITE", href: "/" },
      links = [
        { text: "Services", href: "#services" },
        { text: "Process", href: "#process" },
        { text: "Clients", href: "#clients" },
        { text: "Team", href: "#team" },
      ],
      actionButtons = [
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
      menuToggleColor = `bg-${colorScheme.primaryColor}`,
      onScrollHide = true,
    } = options;

    // Create main nav container with sectionBg applied
    const nav = document.createElement("nav");
    nav.className = `fixed top-0 w-full bg-${colorScheme.sectionBg} backdrop-blur-sm border-b border-gray-200 z-50`;

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
      linkElem.className = `text-${colorScheme.subduedTextColor} hover:text-${colorScheme.primaryColor}`;
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
    menuBtn.className = "lg:hidden p-2 flex flex-col items-center justify-center";
    menuBtn.setAttribute("aria-label", "Menu");
    [1, 2, 3].forEach(() => {
      const line = document.createElement("div");
      line.className = `w-6 h-0.5 ${menuToggleColor} mb-1.5`;
      menuBtn.appendChild(line);
    });

    // Mobile menu
    const mobileMenu = document.createElement("div");
    mobileMenu.id = "mobileMenu";
    mobileMenu.className = `hidden lg:hidden bg-${colorScheme.sectionBg} border-t border-gray-200`;
    const mobileLinksContainer = document.createElement("div");
    mobileLinksContainer.className = "px-4 py-2 space-y-2";

    links.forEach((link) => {
      const linkElem = document.createElement("a");
      linkElem.href = link.href;
      linkElem.className = `block py-2 text-${colorScheme.subduedTextColor}`;
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

  function createHero(options = {}) {
    // Default color scheme with new `sectionBg` key
    const colorScheme = {
      primaryColor: "purple-900",
      primaryBg: "purple-100",
      sectionBg: "white",
      textColor: "black",
      subduedTextColor: "text-gray-600",
      solidButtonHover: "purple-700",
      outlineButtonHover: "purple-200",
      ...(options.colorScheme || {}),
    };

    // Set default options
    const {
      welcomeText = "Welcome to YourSITE Consulting",
      title = "Transform Your Business with",
      highlightedText = "Intelligent Solutions",
      subtitle = "Leverage cutting-edge artificial intelligence to streamline operations, enhance decision-making, and drive unprecedented growth for your enterprise.",
      buttons = [
        { text: "Watch Demo", href: "#demo", color: `bg-${colorScheme.primaryColor} text-white hover:bg-${colorScheme.solidButtonHover}` },
        { text: "Get Started", href: "#contact", color: `border-2 border-${colorScheme.primaryColor} text-${colorScheme.primaryColor} hover:bg-${colorScheme.outlineButtonHover}` },
      ],
      rating = { stars: "5.0", text: "5.0 rating on Clutch" },
      enterprisesServed = { count: "500+", description: "enterprises served" },
      image = {
        src: `https://dummyimage.com/600x500/${getTailwindColor(colorScheme.primaryColor)}/ffffff&text=AI+Platform+Interface`,
        alt: "AI Platform Interface",
      },
    } = options;

    // Create the main section with sectionBg as background
    const section = document.createElement("section");
    section.className = `pt-32 pb-20 px-4 bg-${colorScheme.sectionBg}`;

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
    welcomeBadge.className = `inline-block px-4 py-1 bg-${colorScheme.outlineButtonHover} text-${colorScheme.primaryColor} text-sm font-semibold rounded-full uppercase tracking-wide mb-4`;
    welcomeBadge.textContent = welcomeText;

    // Title with Highlighted Text
    const titleElem = document.createElement("h1");
    titleElem.className = "text-4xl lg:text-5xl font-bold mb-6";
    titleElem.innerHTML = `${title} <span class="text-${colorScheme.primaryColor} relative">${highlightedText}<span class="absolute bottom-0 left-0 w-full h-2 bg-${colorScheme.outlineButtonHover} opacity-50 -z-10"></span></span>`;

    // Subtitle
    const subtitleElem = document.createElement("p");
    subtitleElem.className = `text-${colorScheme.subduedTextColor} text-lg mb-8`;
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
    stars.className = `text-${colorScheme.primaryColor}`;
    stars.innerHTML = "★".repeat(starCount).padEnd(5, "☆");

    const ratingText = document.createElement("span");
    ratingText.className = `text-sm text-${colorScheme.subduedTextColor}`;
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
    enterpriseText.className = `text-sm text-${colorScheme.subduedTextColor} ml-2`;
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
    decorativeCircle1.className = `absolute -right-5 -top-5 w-32 h-32 bg-${colorScheme.outlineButtonHover} opacity-20 rounded-full`;
    const decorativeCircle2 = document.createElement("div");
    decorativeCircle2.className = `absolute -left-10 -bottom-10 w-44 h-44 bg-gradient-to-br from-${colorScheme.primaryBg} to-${colorScheme.outlineButtonHover} rounded-full opacity-50`;

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

  function createLeadCapture(options = {}) {
    // Default color scheme with new sectionBg key, allowing overrides from options
    const colorScheme = {
      primaryColor: "purple-900",
      primaryBg: "purple-100",
      sectionBg: "white",
      textColor: "black",
      subduedTextColor: "text-gray-600",
      solidButtonHover: "purple-700",
      outlineButtonHover: "purple-200",
      ...(options.colorScheme || {}),
    };

    // Set default options
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
      buttonClass = `w-full py-3 px-6 bg-${colorScheme.primaryColor} text-white rounded-md hover:bg-${colorScheme.solidButtonHover} transition-colors font-medium`,
      onSubmit = (data) => console.log("Form submitted with data:", data),
      features = [
        {
          iconClass: "fas fa-shopping-cart",
          iconBgColor: `bg-${colorScheme.primaryBg}`,
          iconColor: `text-${colorScheme.primaryColor}`,
          title: "AI-Powered Analytics",
          description: "Transform your data into actionable insights with our advanced AI analytics platform. Make informed decisions faster.",
        },
        {
          iconClass: "fas fa-envelope",
          iconBgColor: `bg-${colorScheme.primaryBg}`,
          iconColor: `text-${colorScheme.primaryColor}`,
          title: "Process Automation",
          description: "Streamline your operations with intelligent automation solutions that reduce costs and improve efficiency.",
        },
      ],
    } = options;

    // Section Container with sectionBg applied
    const section = document.createElement("section");
    section.className = `py-16 px-4 bg-${colorScheme.sectionBg}`;

    // Title Container
    const titleContainer = document.createElement("div");
    titleContainer.className = "max-w-7xl mx-auto text-center mb-12";

    const tagElem = document.createElement("span");
    tagElem.className = `inline-block px-4 py-1 bg-${colorScheme.primaryBg} text-${colorScheme.primaryColor} text-sm font-semibold rounded-full uppercase tracking-wide mb-4`;
    tagElem.textContent = sectionTag;

    const titleElem = document.createElement("h2");
    titleElem.className = "text-4xl lg:text-5xl font-bold mb-6";
    titleElem.textContent = title;

    const subheadingElem = document.createElement("h3");
    subheadingElem.className = "text-3xl font-bold text-center mb-6";
    subheadingElem.textContent = subheading;

    const descriptionElem = document.createElement("p");
    descriptionElem.className = `text-${colorScheme.subduedTextColor} text-lg max-w-3xl mx-auto mb-6`;
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
        inputElem.className = `w-full p-3 rounded-md border border-gray-200 focus:border-${colorScheme.primaryColor} focus:ring-2 focus:ring-${colorScheme.outlineButtonHover} outline-none transition-all text-gray-500`;
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
        inputElem.className = `w-full p-3 rounded-md border border-gray-200 focus:border-${colorScheme.primaryColor} focus:ring-2 focus:ring-${colorScheme.outlineButtonHover} outline-none transition-all`;
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
      featureDescription.className = `text-${colorScheme.subduedTextColor}`;
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
    // Set up the default color scheme with sectionBg derived from primary color
    const colorScheme = {
      primaryColor: "purple-900",
      primaryBg: "purple-100",
      sectionBg: "gray-900",
      textColor: "gray-200",
      subduedTextColor: "gray-400",
      solidButtonHover: "purple-700",
      outlineButtonHover: "purple-200",
      ...(options.colorScheme || {}),
    };

    const {
      logo = { src: `https://dummyimage.com/180x60/${getTailwindColor(colorScheme.primaryColor)}/ffffff&text=YourSITE`, alt: "YourSITE" },
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
        { src: `https://dummyimage.com/60x30/${getTailwindColor(colorScheme.primaryColor)}/ffffff&text=ISO`, alt: "ISO Certification" },
        { src: `https://dummyimage.com/60x30/${getTailwindColor(colorScheme.primaryColor)}/ffffff&text=SOC2`, alt: "SOC2 Certification" },
        { src: `https://dummyimage.com/60x30/${getTailwindColor(colorScheme.primaryColor)}/ffffff&text=GDPR`, alt: "GDPR Compliant" },
      ],
    } = options;

    const footer = document.createElement("footer");
    footer.className = `bg-${colorScheme.sectionBg} text-${colorScheme.textColor} py-16 px-4`;

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
    descriptionElem.className = `text-${colorScheme.subduedTextColor} mb-6`;
    descriptionElem.textContent = description;
    brandColumn.appendChild(descriptionElem);

    // Social Links
    const socialLinksContainer = document.createElement("div");
    socialLinksContainer.className = "flex space-x-4";
    socialLinks.forEach((link) => {
      const socialLink = document.createElement("a");
      socialLink.href = link.href;
      socialLink.className = `w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-${colorScheme.primaryColor} transition-colors`;
      socialLink.innerHTML = `<i class="${link.iconClass}"></i>`;
      socialLinksContainer.appendChild(socialLink);
    });
    brandColumn.appendChild(socialLinksContainer);

    // Services and Company Sections
    const createSection = (section) => {
      const sectionDiv = document.createElement("div");
      const sectionTitle = document.createElement("h3");
      sectionTitle.className = `text-${colorScheme.textColor} font-semibold mb-4`;
      sectionTitle.textContent = section.title;
      sectionDiv.appendChild(sectionTitle);

      const linkList = document.createElement("ul");
      linkList.className = "space-y-3";
      section.links.forEach((link) => {
        const listItem = document.createElement("li");
        const anchor = document.createElement("a");
        anchor.href = link.href;
        anchor.className = `hover:text-${colorScheme.primaryColor} transition-colors`;
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
    newsletterTitle.className = `text-${colorScheme.textColor} font-semibold mb-4`;
    newsletterTitle.textContent = newsletter.title;
    newsletterColumn.appendChild(newsletterTitle);

    const newsletterText = document.createElement("p");
    newsletterText.className = `text-sm text-${colorScheme.subduedTextColor} mb-4`;
    newsletterText.textContent = newsletter.text;
    newsletterColumn.appendChild(newsletterText);

    const newsletterForm = document.createElement("form");
    newsletterForm.className = "space-y-4";

    const formGroup = document.createElement("div");
    formGroup.className = "flex rounded overflow-hidden";

    const emailInput = document.createElement("input");
    emailInput.type = "email";
    emailInput.placeholder = newsletter.placeholder;
    emailInput.className = `flex-1 bg-white text-gray-700 px-4 py-2 border border-gray-300 rounded-l focus:outline-none focus:ring-1 focus:ring-${colorScheme.primaryColor}`;
    formGroup.appendChild(emailInput);

    const subscribeButton = document.createElement("button");
    subscribeButton.type = "button";
    subscribeButton.className = `bg-${colorScheme.primaryColor} text-white px-4 py-2 hover:bg-${colorScheme.solidButtonHover} transition-colors rounded-r`;
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
    agreementText.className = `text-xs text-${colorScheme.subduedTextColor} mt-2`;
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
    legalLinksContainer.className = `flex flex-wrap gap-6 text-sm`;
    legalLinks.forEach((link) => {
      const legalLink = document.createElement("a");
      legalLink.href = link.href;
      legalLink.className = `hover:text-${colorScheme.primaryColor} transition-colors`;
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

  function createSocialProof(options = {}) {
    // Default color scheme with sectionBg, allowing overrides from options
    const colorScheme = {
      primaryColor: "purple-900",
      primaryBg: "purple-100",
      sectionBg: "white", // Used for larger section backgrounds
      textColor: "black",
      subduedTextColor: "text-gray-600",
      solidButtonHover: "purple-700",
      outlineButtonHover: "purple-200",
      ...(options.colorScheme || {}),
    };

    // Set default options
    const {
      sectionTag = "Section Tag",
      title = "This Is A Reusable Section Header",
      subheading = "Feel Free to Make this subheading your Heading for the section",
      description = "Description related to the section in which it is placed comes here. It is obviously optional. Any element within this section heading section can be skipped.",
      reviews = [
        {
          rating: 5,
          text: "Landify understands content creation. A partner that crafts engaging copy, making my content strategy smarter.",
          imageSrc: `https://dummyimage.com/48x48/${getTailwindColor(colorScheme.primaryColor)}/ffffff&text=AS`,
          imageAlt: "Alex Smith",
          name: "Alex Smith",
          handle: "@alexsmith",
        },
        {
          rating: 5,
          text: "Optimized response times of Landify are a game-changer. Quick iterations and tailored solutions make it.",
          imageSrc: `https://dummyimage.com/48x48/${getTailwindColor(colorScheme.primaryColor)}/ffffff&text=DV`,
          imageAlt: "David Visionary",
          name: "David Visionary",
          handle: "@davidvisionary",
        },
        {
          rating: 5,
          text: "Optimized response times of Landify are a game-changer. Quick iterations and tailored solutions make it.",
          imageSrc: `https://dummyimage.com/48x48/${getTailwindColor(colorScheme.primaryColor)}/ffffff&text=DV`,
          imageAlt: "David Visionary",
          name: "David Visionary",
          handle: "@davidvisionary",
        },
      ],
    } = options;

    // Create main section with sectionBg
    const section = document.createElement("section");
    section.className = `py-16 px-4 bg-${colorScheme.sectionBg}`;

    // Section Title Container
    const titleContainer = document.createElement("div");
    titleContainer.className = "max-w-7xl mx-auto text-center mb-12";

    if (sectionTag) {
      const tagElem = document.createElement("span");
      tagElem.className = `inline-block px-4 py-1 bg-${colorScheme.primaryBg} text-${colorScheme.primaryColor} text-sm font-semibold rounded-full uppercase tracking-wide mb-4`;
      tagElem.textContent = sectionTag;
      titleContainer.appendChild(tagElem);
    }

    if (title) {
      const titleElem = document.createElement("h2");
      titleElem.className = "text-4xl lg:text-5xl font-bold mb-6";
      titleElem.textContent = title;
      titleContainer.appendChild(titleElem);
    }

    if (subheading) {
      const subheadingElem = document.createElement("h3");
      subheadingElem.className = "text-3xl font-bold text-center mb-6";
      subheadingElem.textContent = subheading;
      titleContainer.appendChild(subheadingElem);
    }

    if (description) {
      const descriptionElem = document.createElement("p");
      descriptionElem.className = `text-${colorScheme.subduedTextColor} text-lg max-w-3xl mx-auto mb-6`;
      descriptionElem.textContent = description;
      titleContainer.appendChild(descriptionElem);
    }

    section.appendChild(titleContainer);

    // Reviews Grid Container
    const reviewsGrid = document.createElement("div");
    reviewsGrid.className = "max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8";

    reviews.forEach((review) => {
      const reviewCard = document.createElement("div");
      reviewCard.className = "bg-white rounded-xl p-8 shadow-sm";

      // Star Rating
      const ratingContainer = document.createElement("div");
      ratingContainer.className = "flex items-center text-yellow-400 mb-4";
      for (let i = 0; i < review.rating; i++) {
        const starIcon = document.createElement("i");
        starIcon.className = "fas fa-star";
        ratingContainer.appendChild(starIcon);
      }
      reviewCard.appendChild(ratingContainer);

      // Review Text
      const reviewText = document.createElement("p");
      reviewText.className = `text-${colorScheme.subduedTextColor} mb-6`;
      reviewText.textContent = review.text;
      reviewCard.appendChild(reviewText);

      // Reviewer Info
      const reviewerContainer = document.createElement("div");
      reviewerContainer.className = "flex items-center gap-4";

      const reviewerImage = document.createElement("img");
      reviewerImage.src = review.imageSrc;
      reviewerImage.alt = review.imageAlt;
      reviewerImage.className = "w-12 h-12 rounded-full";
      reviewerContainer.appendChild(reviewerImage);

      const reviewerDetails = document.createElement("div");

      const reviewerName = document.createElement("h4");
      reviewerName.className = "font-semibold";
      reviewerName.textContent = review.name;
      reviewerDetails.appendChild(reviewerName);

      const reviewerHandle = document.createElement("p");
      reviewerHandle.className = `text-sm text-${colorScheme.subduedTextColor}`;
      reviewerHandle.textContent = review.handle;
      reviewerDetails.appendChild(reviewerHandle);

      reviewerContainer.appendChild(reviewerDetails);
      reviewCard.appendChild(reviewerContainer);

      reviewsGrid.appendChild(reviewCard);
    });

    section.appendChild(reviewsGrid);
    return section;
  }

  function createPricing(options = {}) {
    // Default color scheme, allowing overrides from options
    const colorScheme = {
      primaryColor: "purple-900",
      primaryBg: "purple-100",
      sectionBg: "white",
      textColor: "black",
      subduedTextColor: "text-gray-600",
      solidButtonHover: "purple-700",
      outlineButtonHover: "purple-200",
      tickColor: "green-500", // Default tick icon color
      ...(options.colorScheme || {}),
    };

    // Set default options
    const {
      sectionTag = "Section Tag",
      title = "This Is A Reusable Section Header",
      subheading = "Feel Free to Make this subheading your Heading for the section",
      description = "Description related to the section in which it is placed comes here. It is obviously optional. Any element within this section heading section can be skipped.",
      pricingOptions = [
        {
          imageSrc: `https://dummyimage.com/48x48/${getTailwindColor(colorScheme.primaryColor)}/ffffff&text=AI`,
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
          style: `bg-${colorScheme.primaryBg}`,
        },
        {
          imageSrc: `https://dummyimage.com/48x48/${getTailwindColor(colorScheme.primaryColor)}/ffffff&text=AI`,
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
          style: `bg-${colorScheme.primaryBg}`,
        },
        {
          imageSrc: `https://dummyimage.com/48x48/${getTailwindColor(colorScheme.primaryColor)}/ffffff&text=AI`,
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
          style: `bg-${colorScheme.primaryBg}`,
        },
      ],
    } = options;

    // Section Container
    const section = document.createElement("section");
    section.className = `py-16 px-4 bg-${colorScheme.sectionBg}`;

    // Section Title Container
    const titleContainer = document.createElement("div");
    titleContainer.className = "max-w-7xl mx-auto text-center mb-12";

    if (sectionTag) {
      const tagElem = document.createElement("span");
      tagElem.className = `inline-block px-4 py-1 bg-${colorScheme.primaryBg} text-${colorScheme.primaryColor} text-sm font-semibold rounded-full uppercase tracking-wide mb-4`;
      tagElem.textContent = sectionTag;
      titleContainer.appendChild(tagElem);
    }

    if (title) {
      const titleElem = document.createElement("h2");
      titleElem.className = "text-4xl lg:text-5xl font-bold mb-6";
      titleElem.textContent = title;
      titleContainer.appendChild(titleElem);
    }

    if (subheading) {
      const subheadingElem = document.createElement("h3");
      subheadingElem.className = "text-3xl font-bold text-center mb-6";
      subheadingElem.textContent = subheading;
      titleContainer.appendChild(subheadingElem);
    }

    if (description) {
      const descriptionElem = document.createElement("p");
      descriptionElem.className = `text-${colorScheme.subduedTextColor} text-lg max-w-3xl mx-auto mb-6`;
      descriptionElem.textContent = description;
      titleContainer.appendChild(descriptionElem);
    }

    section.appendChild(titleContainer);

    // Pricing Grid Container
    const pricingGrid = document.createElement("div");
    pricingGrid.className = "max-w-7xl mx-auto grid gap-8";
    pricingGrid.style.gridTemplateColumns = "repeat(auto-fit, minmax(250px, 1fr))";

    pricingOptions.forEach((option) => {
      const card = document.createElement("div");
      card.className = `rounded-3xl p-8 ${option.style} relative overflow-hidden h-full flex flex-col`;

      // Badge
      if (option.badge) {
        const badge = document.createElement("span");
        badge.className = `absolute top-4 right-4 px-3 py-1 text-xs font-semibold text-white bg-${colorScheme.primaryColor} rounded-full`;
        badge.textContent = option.badge;
        card.appendChild(badge);
      }

      // Image
      const imageContainer = document.createElement("div");
      imageContainer.className = "flex justify-center mb-6";
      const image = document.createElement("img");
      image.src = option.imageSrc;
      image.alt = option.imageAlt;
      image.className = "w-16 h-16 bg-white rounded-2xl shadow-sm p-2";
      imageContainer.appendChild(image);
      card.appendChild(imageContainer);

      // Title and Subtitle
      const titleContainer = document.createElement("div");
      titleContainer.className = "text-center mb-8";
      const titleElem = document.createElement("h3");
      titleElem.className = "text-2xl font-bold mb-1";
      titleElem.textContent = option.title;

      const subtitleElem = document.createElement("p");
      subtitleElem.className = "text-gray-500 text-sm";
      subtitleElem.textContent = option.subtitle;

      titleContainer.appendChild(titleElem);
      titleContainer.appendChild(subtitleElem);
      card.appendChild(titleContainer);

      // Description
      const descriptionElem = document.createElement("p");
      descriptionElem.className = `text-${colorScheme.subduedTextColor} mb-4 text-center`;
      descriptionElem.textContent = option.description;
      card.appendChild(descriptionElem);

      // Items List (centered container, left-aligned items)
      const itemListContainer = document.createElement("div");
      itemListContainer.className = "flex justify-center"; // Centering container horizontally

      const itemList = document.createElement("ul");
      itemList.className = "space-y-2 mb-4 text-left"; // Left-aligning list items
      option.items.forEach((item) => {
        const itemElem = document.createElement("li");
        itemElem.className = "flex items-center gap-2";
        itemElem.innerHTML = `<i class="fas fa-check text-${colorScheme.tickColor}"></i> <span>${item}</span>`;
        itemList.appendChild(itemElem);
      });
      itemListContainer.appendChild(itemList);
      card.appendChild(itemListContainer);

      // Pre-Price Description
      if (option.prePriceDescription) {
        const prePriceDesc = document.createElement("p");
        prePriceDesc.className = `text-center text-sm text-${colorScheme.subduedTextColor} mb-2 italic`;
        prePriceDesc.textContent = option.prePriceDescription;
        card.appendChild(prePriceDesc);
      }

      // Pricing
      const pricingContainer = document.createElement("div");
      pricingContainer.className = "text-center mb-4";
      const priceElem = document.createElement("span");
      priceElem.className = "text-4xl font-bold";
      priceElem.textContent = option.offerPrice;

      const originalPriceElem = option.originalPrice ? document.createElement("span") : null;
      if (originalPriceElem) {
        originalPriceElem.className = "text-2xl text-gray-400 line-through ml-3";
        originalPriceElem.textContent = option.originalPrice;
        pricingContainer.appendChild(originalPriceElem);
      }

      pricingContainer.appendChild(priceElem);
      card.appendChild(pricingContainer);

      // Post-Price Description
      if (option.postPriceDescription) {
        const postPriceDesc = document.createElement("p");
        postPriceDesc.className = `text-center text-sm text-${colorScheme.subduedTextColor} mb-4`;
        postPriceDesc.textContent = option.postPriceDescription;
        card.appendChild(postPriceDesc);
      }

      // CTA Button
      const button = document.createElement("button");
      button.className = `w-full py-3 px-6 bg-${colorScheme.primaryColor} text-white rounded-xl hover:bg-${colorScheme.solidButtonHover} transition-colors`;
      button.textContent = option.buttonText;
      button.addEventListener("click", option.buttonHandler);
      card.appendChild(button);

      pricingGrid.appendChild(card);
    });

    section.appendChild(pricingGrid);
    return section;
  }

  function createFAQQuick(options = {}) {
    // Default color scheme, with sectionBg derived from primary color
    const colorScheme = {
      primaryColor: "purple-900",
      primaryBg: "purple-100",
      sectionBg: "white",
      textColor: "black",
      subduedTextColor: "text-gray-600",
      solidButtonHover: "purple-700",
      outlineButtonHover: "purple-200",

      ...(options.colorScheme || {}),
    };

    // Destructure options with default values
    const {
      sectionTag = "Section Tag",
      title = "This Is A Reusable Section Header",
      subheading = "Feel Free to Make this subheading your Heading for the section",
      description = "Description related to the section in which it is placed comes here. It is obviously optional. Any element within this section heading section can be skipped.",
      iconClass = "fas fa-question-circle", // Default icon for all questions
      iconBgColor = `bg-${colorScheme.primaryBg}`, // Icon background color
      iconColor = `text-${colorScheme.primaryColor}`, // Icon color
      faqItems = [
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
    } = options;

    // Create main section with sectionBg applied
    const section = document.createElement("section");
    section.className = `py-16 px-4 bg-${colorScheme.sectionBg}`;

    // Section Title Container
    const titleContainer = document.createElement("div");
    titleContainer.className = "max-w-7xl mx-auto text-center mb-12";

    if (sectionTag) {
      const tagElem = document.createElement("span");
      tagElem.className = `inline-block px-4 py-1 bg-${colorScheme.primaryBg} text-${colorScheme.primaryColor} text-sm font-semibold rounded-full uppercase tracking-wide mb-4`;
      tagElem.textContent = sectionTag;
      titleContainer.appendChild(tagElem);
    }

    if (title) {
      const titleElem = document.createElement("h2");
      titleElem.className = "text-4xl lg:text-5xl font-bold mb-6";
      titleElem.textContent = title;
      titleContainer.appendChild(titleElem);
    }

    if (subheading) {
      const subheadingElem = document.createElement("h3");
      subheadingElem.className = "text-3xl font-bold text-center mb-6";
      subheadingElem.textContent = subheading;
      titleContainer.appendChild(subheadingElem);
    }

    if (description) {
      const descriptionElem = document.createElement("p");
      descriptionElem.className = `text-${colorScheme.subduedTextColor} text-lg max-w-3xl mx-auto mb-6`;
      descriptionElem.textContent = description;
      titleContainer.appendChild(descriptionElem);
    }

    section.appendChild(titleContainer);

    // FAQ Grid
    const faqGrid = document.createElement("div");
    faqGrid.className = "max-w-7xl mx-auto grid md:grid-cols-2 gap-8";

    faqItems.forEach(({ question, answer }) => {
      const faqItem = document.createElement("div");
      faqItem.className = "flex gap-4";

      const iconContainer = document.createElement("div");
      iconContainer.className = `flex-shrink-0 w-12 h-12 ${iconBgColor} rounded-xl flex items-center justify-center`;

      const icon = document.createElement("i");
      icon.className = `${iconClass} ${iconColor} text-xl`;
      iconContainer.appendChild(icon);

      const textContainer = document.createElement("div");
      const questionElem = document.createElement("h3");
      questionElem.className = "text-xl font-semibold mb-2";
      questionElem.textContent = question;

      const answerElem = document.createElement("p");
      answerElem.className = `text-${colorScheme.subduedTextColor}`;
      answerElem.textContent = answer;

      textContainer.appendChild(questionElem);
      textContainer.appendChild(answerElem);

      faqItem.appendChild(iconContainer);
      faqItem.appendChild(textContainer);
      faqGrid.appendChild(faqItem);
    });

    section.appendChild(faqGrid);
    return section;
  }

  function createFAQCollapsed(options = {}) {
    const colorScheme = {
      primaryColor: "purple-900",
      primaryBg: "purple-100",
      sectionBg: "white",
      textColor: "black",
      subduedTextColor: "text-gray-600",
      solidButtonHover: "purple-700",
      outlineButtonHover: "purple-200",
      ...(options.colorScheme || {}),
    };

    // Set default options
    const {
      sectionTag = "Section Tag",
      title = "This Is A Reusable Section Header",
      subheading = "Feel Free to Make this subheading your Heading for the section",
      description = "Description related to the section in which it is placed comes here. It is obviously optional. Any element within this section heading section can be skipped.",
      faqs = [
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
    } = options;

    // Main Section with sectionBg applied
    const section = document.createElement("section");
    section.className = `py-16 px-4 bg-${colorScheme.sectionBg}`;

    // Title Container
    const titleContainer = document.createElement("div");
    titleContainer.className = "max-w-7xl mx-auto text-center mb-12";

    if (sectionTag) {
      const tagElem = document.createElement("span");
      tagElem.className = `inline-block px-4 py-1 bg-${colorScheme.primaryBg} text-${colorScheme.primaryColor} text-sm font-semibold rounded-full uppercase tracking-wide mb-4`;
      tagElem.textContent = sectionTag;
      titleContainer.appendChild(tagElem);
    }

    if (title) {
      const titleElem = document.createElement("h2");
      titleElem.className = "text-4xl lg:text-5xl font-bold mb-6";
      titleElem.textContent = title;
      titleContainer.appendChild(titleElem);
    }

    if (subheading) {
      const subheadingElem = document.createElement("h3");
      subheadingElem.className = "text-3xl font-bold text-center mb-6";
      subheadingElem.textContent = subheading;
      titleContainer.appendChild(subheadingElem);
    }

    if (description) {
      const descriptionElem = document.createElement("p");
      descriptionElem.className = `text-${colorScheme.subduedTextColor} text-lg max-w-3xl mx-auto mb-6`;
      descriptionElem.textContent = description;
      titleContainer.appendChild(descriptionElem);
    }

    section.appendChild(titleContainer);

    // FAQ Container
    const faqContainer = document.createElement("div");
    faqContainer.className = "max-w-3xl mx-auto space-y-4";

    faqs.forEach(({ question, answer }) => {
      const faqItem = document.createElement("div");
      faqItem.className = `faq-item bg-${colorScheme.sectionBg} rounded-lg`;

      const toggleButton = document.createElement("button");
      toggleButton.className = `faq-toggle flex justify-between items-center w-full px-6 py-4 text-left hover:bg-${colorScheme.primaryBg} transition-colors`;
      toggleButton.innerHTML = `
      <span class="font-medium text-${colorScheme.textColor}">${question}</span>
      <svg class="w-5 h-5 text-${colorScheme.subduedTextColor} transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
    `;

      const answerDiv = document.createElement("div");
      answerDiv.className = `faq-answer px-6 pb-4 text-${colorScheme.subduedTextColor} hidden`;
      answerDiv.textContent = answer;

      faqItem.appendChild(toggleButton);
      faqItem.appendChild(answerDiv);
      faqContainer.appendChild(faqItem);
    });

    section.appendChild(faqContainer);

    // FAQ Toggle Logic
    faqContainer.addEventListener("click", function (event) {
      const toggle = event.target.closest(".faq-toggle");
      if (!toggle) return;

      const faqItem = toggle.closest(".faq-item");
      const answer = faqItem.querySelector(".faq-answer");
      const chevron = toggle.querySelector("svg");

      // Toggle the answer visibility
      answer.classList.toggle("hidden");

      // Rotate the chevron when open
      chevron.style.transform = answer.classList.contains("hidden") ? "rotate(0)" : "rotate(180deg)";

      // Close other FAQs if open
      faqContainer.querySelectorAll(".faq-answer").forEach((otherAnswer) => {
        if (otherAnswer !== answer && !otherAnswer.classList.contains("hidden")) {
          otherAnswer.classList.add("hidden");
          otherAnswer.previousElementSibling.querySelector("svg").style.transform = "rotate(0)";
        }
      });
    });

    return section;
  }

  function createValuePropositionBlocks(options = {}) {
    // Default color scheme with new sectionBg key, allowing overrides from options
    const colorScheme = {
      primaryColor: "purple-900",
      primaryBg: "purple-100",
      sectionBg: "white",
      textColor: "black",
      subduedTextColor: "text-gray-600",
      solidButtonHover: "purple-700",
      outlineButtonHover: "purple-200",
      ...(options.colorScheme || {}),
    };

    const {
      sectionTag = "Section Tag",
      title = "This Is A Reusable Section Header",
      subheading = "Feel Free to Make this subheading your Heading for the section",
      description = "Description related to the section in which it is placed comes here. It is obviously optional. Any element within this section heading section can be skipped.",
      blocks = [
        [
          { title: "$2M+", description: "AVERAGE CLIENT ROI", iconClass: "fas fa-dollar-sign", bgColor: `bg-${"gray-100"}`, iconColor: `text-${colorScheme.primaryColor}` },
          { title: "Secret insights", description: "FROM REAL CASE-STUDIES", iconClass: "fas fa-lightbulb", bgColor: `bg-${"gray-100"}`, iconColor: `text-${colorScheme.primaryColor}` },
        ],
        [
          {
            title: "Top companies hiring in this industry",
            description: "GET HIRED TO WORK FOR THESE GLOBAL GIANTS",
            icons: [
              { src: `https://dummyimage.com/160x40/${getTailwindColor(colorScheme.primaryColor)}/ffffff&text=Microsoft`, alt: "Microsoft" },
              { src: `https://dummyimage.com/160x40/${getTailwindColor(colorScheme.primaryColor)}/ffffff&text=Adobe`, alt: "Adobe" },
              { src: `https://dummyimage.com/160x40/${getTailwindColor(colorScheme.primaryColor)}/ffffff&text=Philips`, alt: "Philips" },
              { src: `https://dummyimage.com/160x40/${getTailwindColor(colorScheme.primaryColor)}/ffffff&text=Intel`, alt: "Intel" },
            ],
            bgColor: `bg-${colorScheme.primaryBg} bg-opacity-50`,
          },
        ],
        [
          { title: "$2M+", description: "AVERAGE CLIENT ROI", iconClass: "fas fa-dollar-sign", bgColor: `bg-${"gray-100"}`, iconColor: `text-${colorScheme.primaryColor}` },
          { title: "Secret insights", description: "FROM REAL CASE-STUDIES", iconClass: "fas fa-lightbulb", bgColor: `bg-${"gray-100"}`, iconColor: `text-${colorScheme.primaryColor}` },
        ],
      ],
    } = options;

    // Section Container with sectionBg applied
    const section = document.createElement("section");
    section.className = `py-16 px-4 bg-${colorScheme.sectionBg}`;

    // Title Container
    const titleContainer = document.createElement("div");
    titleContainer.className = "max-w-7xl mx-auto text-center mb-12";

    if (sectionTag) {
      const tagElem = document.createElement("span");
      tagElem.className = `inline-block px-4 py-1 bg-${colorScheme.primaryBg} text-${colorScheme.primaryColor} text-sm font-semibold rounded-full uppercase tracking-wide mb-4`;
      tagElem.textContent = sectionTag;
      titleContainer.appendChild(tagElem);
    }

    if (title) {
      const titleElem = document.createElement("h2");
      titleElem.className = "text-4xl lg:text-5xl font-bold mb-6";
      titleElem.textContent = title;
      titleContainer.appendChild(titleElem);
    }

    if (subheading) {
      const subheadingElem = document.createElement("h3");
      subheadingElem.className = "text-3xl font-bold text-center mb-6";
      subheadingElem.textContent = subheading;
      titleContainer.appendChild(subheadingElem);
    }

    if (description) {
      const descriptionElem = document.createElement("p");
      descriptionElem.className = `text-${colorScheme.subduedTextColor} text-lg max-w-3xl mx-auto mb-6`;
      descriptionElem.textContent = description;
      titleContainer.appendChild(descriptionElem);
    }

    section.appendChild(titleContainer);

    // Blocks Container
    const blocksContainer = document.createElement("div");

    blocksContainer.className = "max-w-7xl mx-auto grid lg:grid-cols-3 gap-6 items-center";

    blocks.forEach((column) => {
      const columnContainer = document.createElement("div");
      columnContainer.className = "space-y-6";

      column.forEach((block) => {
        const blockContainer = document.createElement("div");
        blockContainer.className = `${block.bgColor || `bg-${colorScheme.sectionBg}`} rounded-2xl p-8 relative overflow-hidden`;

        const blockContent = document.createElement("div");
        blockContent.className = "relative z-10";

        const blockTitle = document.createElement("h3");
        blockTitle.className = "text-2xl font-bold mb-2";
        blockTitle.textContent = block.title;

        const blockDescription = document.createElement("p");
        blockDescription.className = `text-sm font-semibold uppercase tracking-wide text-${colorScheme.subduedTextColor}`;
        blockDescription.textContent = block.description;

        blockContent.appendChild(blockTitle);
        blockContent.appendChild(blockDescription);
        blockContainer.appendChild(blockContent);

        if (block.iconClass) {
          const iconContainer = document.createElement("div");
          iconContainer.className = "absolute right-4 top-1/2 -translate-y-1/2 opacity-10";
          const iconElem = document.createElement("i");
          iconElem.className = `${block.iconClass} text-8xl ${block.iconColor}`;
          iconContainer.appendChild(iconElem);
          blockContainer.appendChild(iconContainer);
        }

        if (block.icons) {
          const logoGrid = document.createElement("div");
          logoGrid.className = "grid grid-cols-2 gap-6 mt-8";
          block.icons.forEach((logo) => {
            const logoImg = document.createElement("img");
            logoImg.src = logo.src;
            logoImg.alt = logo.alt;
            logoImg.className = "h-8 object-contain";
            logoGrid.appendChild(logoImg);
          });
          blockContainer.appendChild(logoGrid);
        }

        columnContainer.appendChild(blockContainer);
      });

      blocksContainer.appendChild(columnContainer);
    });

    section.appendChild(blocksContainer);
    return section;
  }

  function createOfferOverviewWithCTA(options = {}) {
    // Default color scheme with `sectionBg` key
    const colorScheme = {
      primaryColor: "purple-900",
      primaryBg: "purple-100",
      sectionBg: "purple-50",
      textColor: "black",
      subduedTextColor: "text-gray-600",
      solidButtonHover: "purple-700",
      outlineButtonHover: "purple-200",
      ...(options.colorScheme || {}),
    };

    const {
      sectionTag = "Limited Time Offer",
      title = "Here's Everything You're Investing In",
      subheading = null,
      description = null,
      originalPrice = "Rs 6,999.00",
      offerPrice = "Rs 2,540.00",
      features = [
        { iconClass: "fas fa-video", bgColor: `bg-${colorScheme.primaryBg}`, iconColor: `text-${colorScheme.primaryColor}`, title: "Live Sessions", description: "Interactive learning with industry experts" },
        { iconClass: "fas fa-certificate", bgColor: `bg-${colorScheme.primaryBg}`, iconColor: `text-${colorScheme.primaryColor}`, title: "Certification", description: "Industry-recognized credentials" },
        { iconClass: "fas fa-users", bgColor: `bg-${colorScheme.primaryBg}`, iconColor: `text-${colorScheme.primaryColor}`, title: "Community Access", description: "Network with peers and mentors" },
      ],
      ctaButtons = [
        {
          text: "Subscribe Now",
          onClick: () => console.log("Subscribed!"),
          bgColor: `bg-${colorScheme.primaryColor}`,
          textColor: "text-white",
          hoverBgColor: `hover:bg-${colorScheme.solidButtonHover}`,
        },
        {
          text: "Skip Forever",
          onClick: () => alert("Skipped"),
          borderColor: `border-2 border-${colorScheme.primaryColor}`,
          textColor: `text-${colorScheme.primaryColor}`,
          hoverBgColor: `hover:bg-${colorScheme.sectionBg}`,
        },
      ],
    } = options;

    const section = document.createElement("section");
    section.className = `bg-gradient-to-r from-${colorScheme.sectionBg} to-blue-50 py-16 px-4`;

    const container = document.createElement("div");
    container.className = "max-w-7xl mx-auto";

    // Section Title
    const titleContainer = document.createElement("div");
    titleContainer.className = "max-w-7xl mx-auto text-center mb-12";

    if (sectionTag) {
      const tagElem = document.createElement("span");
      tagElem.className = `inline-block px-4 py-1 bg-${colorScheme.primaryBg} text-${colorScheme.primaryColor} text-sm font-semibold rounded-full uppercase tracking-wide mb-4`;
      tagElem.textContent = sectionTag;
      titleContainer.appendChild(tagElem);
    }

    if (title) {
      const titleElem = document.createElement("h2");
      titleElem.className = "text-4xl lg:text-5xl font-bold mb-6";
      titleElem.textContent = title;
      titleContainer.appendChild(titleElem);
    }

    if (subheading) {
      const subheadingElem = document.createElement("h3");
      subheadingElem.className = "text-3xl font-bold text-center mb-6";
      subheadingElem.textContent = subheading;
      titleContainer.appendChild(subheadingElem);
    }

    if (description) {
      const descriptionElem = document.createElement("p");
      descriptionElem.className = `text-${colorScheme.subduedTextColor} text-lg max-w-3xl mx-auto mb-6`;
      descriptionElem.textContent = description;
      titleContainer.appendChild(descriptionElem);
    }

    container.appendChild(titleContainer);

    // Pricing Header
    const pricingHeader = document.createElement("div");
    pricingHeader.className = "text-center mb-12";

    const offerTitle = document.createElement("h1");
    offerTitle.className = `text-5xl lg:text-6xl font-bold mb-4 text-${colorScheme.primaryColor}`;
    offerTitle.textContent = "1000+ Sessions [Worth ₹1+ Lakh]";
    pricingHeader.appendChild(offerTitle);

    const offerDescription = document.createElement("p");
    offerDescription.className = `text-xl text-${colorScheme.subduedTextColor} max-w-3xl mx-auto font-medium`;
    offerDescription.textContent = "Learn Directly from Global Experts in Marketing, Product, Design & AI";
    pricingHeader.appendChild(offerDescription);

    container.appendChild(pricingHeader);

    // Subscription Box
    const subscriptionBox = document.createElement("div");
    subscriptionBox.className = "max-w-3xl mx-auto bg-white rounded-2xl p-8 shadow-lg";

    const pricingDetails = document.createElement("div");
    pricingDetails.className = "flex flex-col lg:flex-row items-center justify-between gap-6";

    // Pricing Info
    const pricingInfo = document.createElement("div");
    pricingInfo.className = "text-center lg:text-left";

    const originalPriceElem = document.createElement("span");
    originalPriceElem.className = "text-gray-500 line-through text-lg";
    originalPriceElem.textContent = originalPrice;

    const offerPriceElem = document.createElement("span");
    offerPriceElem.className = `ml-2 text-2xl font-bold text-${colorScheme.primaryColor}`;
    offerPriceElem.textContent = offerPrice;

    pricingInfo.appendChild(originalPriceElem);
    pricingInfo.appendChild(offerPriceElem);
    pricingDetails.appendChild(pricingInfo);

    // CTA Buttons
    const ctaContainer = document.createElement("div");
    ctaContainer.className = "flex flex-col sm:flex-row gap-4";

    ctaButtons.forEach((button) => {
      const btn = document.createElement("button");
      btn.className = `px-6 py-3 ${button.bgColor || button.borderColor} ${button.textColor} rounded-md ${button.hoverBgColor} transition-colors whitespace-nowrap`;
      btn.textContent = button.text;
      btn.addEventListener("click", button.onClick);
      ctaContainer.appendChild(btn);
    });

    pricingDetails.appendChild(ctaContainer);
    subscriptionBox.appendChild(pricingDetails);
    container.appendChild(subscriptionBox);

    // Features Grid
    const featuresGrid = document.createElement("div");
    featuresGrid.className = "mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6";

    features.forEach((feature) => {
      const featureCard = document.createElement("div");
      featureCard.className = "bg-white rounded-xl p-6 shadow-sm";

      const featureContainer = document.createElement("div");
      featureContainer.className = "flex items-center gap-4";

      const iconContainer = document.createElement("div");
      iconContainer.className = `w-12 h-12 ${feature.bgColor} rounded-lg flex items-center justify-center`;

      const iconElem = document.createElement("i");
      iconElem.className = `${feature.iconClass} ${feature.iconColor}`;
      iconContainer.appendChild(iconElem);

      const featureText = document.createElement("div");
      const featureTitle = document.createElement("h3");
      featureTitle.className = "font-semibold text-lg";
      featureTitle.textContent = feature.title;

      const featureDescription = document.createElement("p");
      featureDescription.className = `text-${colorScheme.subduedTextColor}`;
      featureDescription.textContent = feature.description;

      featureText.appendChild(featureTitle);
      featureText.appendChild(featureDescription);
      featureContainer.appendChild(iconContainer);
      featureContainer.appendChild(featureText);

      featureCard.appendChild(featureContainer);
      featuresGrid.appendChild(featureCard);
    });

    container.appendChild(featuresGrid);
    section.appendChild(container);
    return section;
  }

  function createKeyOutcomes(options = {}) {
    // Default color scheme with sectionBg for section background
    const colorScheme = {
      primaryColor: "purple-900",
      primaryBg: "purple-100",
      sectionBg: "purple-50",
      textColor: "black",
      subduedTextColor: "text-gray-600",
      solidButtonHover: "purple-700",
      outlineButtonHover: "purple-200",
      ...(options.colorScheme || {}),
    };

    // Set default options
    const {
      sectionTag = "Section Tag",
      title = "This Is A Reusable Section Header",
      subheading = "Feel Free to Make this subheading your Heading for the section",
      description = "Description related to the section in which it is placed comes here. It is obviously optional. Any element within this section heading section can be skipped.",
      outcomes = [
        "Implement AI-driven automation to reduce operational costs by up to 40%",
        "Develop custom machine learning models for precise business predictions",
        "Enhance customer experience through intelligent chatbots and recommendation systems",
        "Optimize supply chain efficiency using predictive analytics",
        "Implement data-driven decision making across all organizational levels",
        "Ensure AI compliance and ethical implementation of solutions",
        "Accelerate digital transformation with scalable AI infrastructure",
        "Provide comprehensive team training for AI tool adoption",
      ],
      checkmarkColor = `text-${colorScheme.primaryColor}`,
      stats = {
        title: "500+ Enterprises",
        description: "have transformed their businesses with our AI solutions",
        logos: [
          { src: `https://dummyimage.com/100x100/${getTailwindColor(colorScheme.primaryColor)}/ffffff&text=Tech+Co`, alt: "Technology Company" },
          { src: `https://dummyimage.com/100x100/${getTailwindColor(colorScheme.primaryColor)}/ffffff&text=Finance+`, alt: "Financial Services" },
          { src: `https://dummyimage.com/100x100/${getTailwindColor(colorScheme.primaryColor)}/ffffff&text=Health`, alt: "Healthcare" },
          { src: `https://dummyimage.com/100x100/${getTailwindColor(colorScheme.primaryColor)}/ffffff&text=Retail`, alt: "Retail Giant" },
        ],
        benefits: ["Transform your business with cutting-edge AI solutions tailored to your industry", "Access our team of expert AI consultants and data scientists", "Join leading enterprises in achieving AI-driven digital transformation"],
      },
    } = options;

    // Main section container
    const section = document.createElement("section");
    section.className = `py-16 px-4 bg-${colorScheme.sectionBg}`;

    // Section title container
    const titleContainer = document.createElement("div");
    titleContainer.className = "max-w-7xl mx-auto text-center mb-12";

    if (sectionTag) {
      const tagElem = document.createElement("span");
      tagElem.className = `inline-block px-4 py-1 bg-${colorScheme.primaryBg} text-${colorScheme.primaryColor} text-sm font-semibold rounded-full uppercase tracking-wide mb-4`;
      tagElem.textContent = sectionTag;
      titleContainer.appendChild(tagElem);
    }

    if (title) {
      const titleElem = document.createElement("h2");
      titleElem.className = "text-4xl lg:text-5xl font-bold mb-6";
      titleElem.textContent = title;
      titleContainer.appendChild(titleElem);
    }

    if (subheading) {
      const subheadingElem = document.createElement("h3");
      subheadingElem.className = "text-3xl font-bold text-center mb-6";
      subheadingElem.textContent = subheading;
      titleContainer.appendChild(subheadingElem);
    }

    if (description) {
      const descriptionElem = document.createElement("p");
      descriptionElem.className = `text-${colorScheme.subduedTextColor} text-lg max-w-3xl mx-auto mb-6`;
      descriptionElem.textContent = description;
      titleContainer.appendChild(descriptionElem);
    }

    section.appendChild(titleContainer);

    // Outcomes and stats container
    const container = document.createElement("div");
    container.className = "max-w-7xl mx-auto lg:grid lg:grid-cols-2 lg:gap-12";

    // Outcomes Column
    const outcomesColumn = document.createElement("div");

    const outcomesTitle = document.createElement("h2");
    outcomesTitle.className = "text-3xl lg:text-4xl font-bold mb-6";
    outcomesTitle.textContent = "Key Outcomes";
    outcomesColumn.appendChild(outcomesTitle);

    const outcomesDescription = document.createElement("p");
    outcomesDescription.className = `text-${colorScheme.subduedTextColor} text-lg mb-8`;
    outcomesDescription.textContent = description;
    outcomesColumn.appendChild(outcomesDescription);

    const outcomesList = document.createElement("ul");
    outcomesList.className = "space-y-4";

    outcomes.forEach((outcome) => {
      const outcomeItem = document.createElement("li");
      outcomeItem.className = "flex items-start space-x-3";

      const checkIcon = document.createElement("i");
      checkIcon.className = `fas fa-check ${checkmarkColor} mt-1.5`;

      const outcomeText = document.createElement("span");
      outcomeText.className = `text-${colorScheme.subduedTextColor}`;
      outcomeText.textContent = outcome;

      outcomeItem.appendChild(checkIcon);
      outcomeItem.appendChild(outcomeText);
      outcomesList.appendChild(outcomeItem);
    });

    outcomesColumn.appendChild(outcomesList);
    container.appendChild(outcomesColumn);

    // Stats Column
    const statsColumn = document.createElement("div");
    statsColumn.className = "mt-12 lg:mt-0";

    const statsCard = document.createElement("div");
    statsCard.className = "bg-white rounded-2xl p-8 shadow-sm";

    const statsTitle = document.createElement("h3");
    statsTitle.className = "text-2xl font-bold mb-2";
    statsTitle.textContent = stats.title;
    statsCard.appendChild(statsTitle);

    const statsDescription = document.createElement("p");
    statsDescription.className = `text-${colorScheme.subduedTextColor} mb-8`;
    statsDescription.textContent = stats.description;
    statsCard.appendChild(statsDescription);

    // Logos Grid
    const logosGrid = document.createElement("div");
    logosGrid.className = "grid grid-cols-4 gap-4 mb-8";
    stats.logos.forEach((logo) => {
      const logoImg = document.createElement("img");
      logoImg.src = logo.src;
      logoImg.alt = logo.alt;
      logoImg.className = "rounded-lg";
      logosGrid.appendChild(logoImg);
    });
    statsCard.appendChild(logosGrid);

    // Benefits List
    const benefitsList = document.createElement("div");
    benefitsList.className = "space-y-6";
    stats.benefits.forEach((benefit) => {
      const benefitItem = document.createElement("div");
      benefitItem.className = "flex items-start space-x-3";

      const benefitCheckIcon = document.createElement("i");
      benefitCheckIcon.className = `fas fa-check ${checkmarkColor} mt-1`;

      const benefitText = document.createElement("p");
      benefitText.className = `text-${colorScheme.subduedTextColor}`;
      benefitText.textContent = benefit;

      benefitItem.appendChild(benefitCheckIcon);
      benefitItem.appendChild(benefitText);
      benefitsList.appendChild(benefitItem);
    });

    statsCard.appendChild(benefitsList);

    // Badges
    const badgesContainer = document.createElement("div");
    badgesContainer.className = "flex items-center space-x-4 mt-8";
    const badgeImg1 = document.createElement("img");
    badgeImg1.src = `https://dummyimage.com/120x40/${getTailwindColor(colorScheme.primaryColor)}/ffffff&text=YourSITE`;
    badgeImg1.alt = "YourSITE Logo";
    badgeImg1.className = "h-10";
    badgesContainer.appendChild(badgeImg1);

    const badgeImg2 = document.createElement("img");
    badgeImg2.src = `https://dummyimage.com/160x40/${getTailwindColor(colorScheme.primaryColor)}/ffffff&text=AI+Leaders+2024`;
    badgeImg2.alt = "AI Leaders 2024";
    badgeImg2.className = "h-10";
    badgesContainer.appendChild(badgeImg2);

    statsCard.appendChild(badgesContainer);
    statsColumn.appendChild(statsCard);
    container.appendChild(statsColumn);

    section.appendChild(container);
    return section;
  }

  function createFeatureHighlights(options = {}) {
    // Default color scheme, allowing overrides from options
    const colorScheme = {
      primaryColor: "purple-900",
      primaryBg: "purple-100",
      sectionBg: "purple-50", // Section background derived from primary color
      textColor: "black",
      subduedTextColor: "text-gray-600",
      solidButtonHover: "purple-700",
      outlineButtonHover: "purple-200",
      ...(options.colorScheme || {}),
    };

    const {
      sectionTag = "Section Tag",
      title = "This Is A Reusable Section Header",
      subheading = null,
      description = null,
      features = [
        {
          title: "Modern Workspace",
          subheading: null,
          description: "Our state-of-the-art offices are designed to inspire creativity and facilitate collaboration, with flexible spaces for both focused work and team interactions.",
          imageUrl: `https://dummyimage.com/800x600/${getTailwindColor(colorScheme.primaryColor)}/ffffff&text=Modern+Workspace`,
          imageAlt: "Modern Workspace",
          highlights: ["Ergonomic workstations", "Collaborative spaces", "Recreation areas"],
        },
        {
          title: "Growth & Development",
          subheading: null,
          description: "We invest in our team's professional development through continuous learning programs, mentorship opportunities, and career advancement paths.",
          imageUrl: `https://dummyimage.com/800x600/${getTailwindColor(colorScheme.primaryColor)}/ffffff&text=Growth+Opportunities`,
          imageAlt: "Growth Opportunities",
          highlights: ["Learning & development budget", "Mentorship programs", "Career progression framework"],
        },
      ],
    } = options;

    // Create the main section with sectionBg
    const section = document.createElement("section");
    section.className = `py-16 px-4 bg-${colorScheme.sectionBg}`;

    // Section Title Container
    const titleContainer = document.createElement("div");
    titleContainer.className = "max-w-7xl mx-auto text-center mb-12";

    if (sectionTag) {
      const tagElem = document.createElement("span");
      tagElem.className = `inline-block px-4 py-1 bg-${colorScheme.primaryBg} text-${colorScheme.primaryColor} text-sm font-semibold rounded-full uppercase tracking-wide mb-4`;
      tagElem.textContent = sectionTag;
      titleContainer.appendChild(tagElem);
    }

    if (title) {
      const titleElem = document.createElement("h2");
      titleElem.className = "text-4xl lg:text-5xl font-bold mb-6";
      titleElem.textContent = title;
      titleContainer.appendChild(titleElem);
    }

    if (subheading) {
      const subheadingElem = document.createElement("h3");
      subheadingElem.className = "text-3xl font-bold text-center mb-6";
      subheadingElem.textContent = subheading;
      titleContainer.appendChild(subheadingElem);
    }

    if (description) {
      const descriptionElem = document.createElement("p");
      descriptionElem.className = `text-${colorScheme.subduedTextColor} text-lg max-w-3xl mx-auto mb-6`;
      descriptionElem.textContent = description;
      titleContainer.appendChild(descriptionElem);
    }

    section.appendChild(titleContainer);

    // Feature Items Container
    const container = document.createElement("div");
    container.className = "max-w-7xl mx-auto";

    features.forEach((feature, index) => {
      const isReversed = index % 2 !== 0; // Alternate layout for each feature item

      // Feature Item Container
      const featureContainer = document.createElement("div");
      featureContainer.className = `lg:grid lg:grid-cols-2 lg:gap-12 items-center mb-16 ${isReversed ? "lg:flex-row-reverse" : ""}`;

      // Image Container
      const imageContainer = document.createElement("div");
      imageContainer.className = "rounded-xl overflow-hidden mb-8 lg:mb-0";
      const imageElem = document.createElement("img");
      imageElem.src = feature.imageUrl;
      imageElem.alt = feature.imageAlt;
      imageElem.className = "w-full h-full object-cover";
      imageContainer.appendChild(imageElem);

      // Content Container
      const contentContainer = document.createElement("div");
      contentContainer.className = isReversed ? "lg:pr-8" : "lg:pl-8";

      if (feature.title) {
        const featureTitle = document.createElement("h3");
        featureTitle.className = "text-2xl lg:text-3xl font-bold mb-4";
        featureTitle.textContent = feature.title;
        contentContainer.appendChild(featureTitle);
      }

      if (feature.subheading) {
        const featureSubheading = document.createElement("h4");
        featureSubheading.className = "text-xl font-semibold mb-2";
        featureSubheading.textContent = feature.subheading;
        contentContainer.appendChild(featureSubheading);
      }

      if (feature.description) {
        const featureDescription = document.createElement("p");
        featureDescription.className = `text-${colorScheme.subduedTextColor} text-lg mb-6`;
        featureDescription.textContent = feature.description;
        contentContainer.appendChild(featureDescription);
      }

      const highlightsList = document.createElement("ul");
      highlightsList.className = "space-y-3";

      feature.highlights.forEach((highlight) => {
        const highlightItem = document.createElement("li");
        highlightItem.className = "flex items-center space-x-3";

        const checkIcon = document.createElement("i");
        checkIcon.className = "fas fa-check text-green-500";

        const highlightText = document.createElement("span");
        highlightText.className = `text-${colorScheme.subduedTextColor}`;
        highlightText.textContent = highlight;

        highlightItem.appendChild(checkIcon);
        highlightItem.appendChild(highlightText);
        highlightsList.appendChild(highlightItem);
      });

      contentContainer.appendChild(highlightsList);

      // Append Image and Content based on layout order
      if (isReversed) {
        featureContainer.appendChild(contentContainer);
        featureContainer.appendChild(imageContainer);
      } else {
        featureContainer.appendChild(imageContainer);
        featureContainer.appendChild(contentContainer);
      }

      container.appendChild(featureContainer);
    });

    section.appendChild(container);
    return section;
  }

  function createFeatureChecklist(options = {}) {
    // Default color scheme with sectionBg for large block backgrounds
    const colorScheme = {
      primaryColor: "purple-900",
      textColor: "black",
      subduedTextColor: "text-gray-600",
      primaryBg: "purple-100",
      sectionBg: "white",
      solidButtonHover: "purple-700",
      outlineButtonHover: "purple-200",
      ...(options.colorScheme || {}),
    };

    // Set default options
    const { title = "This Is A Reusable Section Header", subheading = "Feel Free to Make this subheading your Heading for the section", description = "Description related to the section in which it is placed comes here. It is obviously optional. Any element within this section heading section can be skipped.", checklistItems = ["Something that's pretty interesting", "Something that's super-cool", "Whoa, that's like the sickest thing I've ever heard"] } = options;

    // Create the main section with sectionBg as background
    const section = document.createElement("section");
    section.className = `py-16 px-4 bg-${colorScheme.sectionBg}`;

    // Section Title Container
    const titleContainer = document.createElement("div");
    titleContainer.className = "max-w-7xl mx-auto text-center mb-12";

    if (title) {
      const titleElem = document.createElement("h2");
      titleElem.className = "text-4xl lg:text-5xl font-bold mb-6";
      titleElem.textContent = title;
      titleContainer.appendChild(titleElem);
    }

    if (subheading) {
      const subheadingElem = document.createElement("h3");
      subheadingElem.className = "text-3xl font-bold text-center mb-6";
      subheadingElem.textContent = subheading;
      titleContainer.appendChild(subheadingElem);
    }

    if (description) {
      const descriptionElem = document.createElement("p");
      descriptionElem.className = `text-${colorScheme.subduedTextColor} text-lg max-w-3xl mx-auto mb-6`;
      descriptionElem.textContent = description;
      titleContainer.appendChild(descriptionElem);
    }

    section.appendChild(titleContainer);

    // Checklist Items Grid
    const container = document.createElement("div");
    container.className = "max-w-7xl mx-auto grid md:grid-cols-3 gap-8";

    checklistItems.forEach((item) => {
      const checklistItem = document.createElement("div");
      checklistItem.className = "flex items-center space-x-4 p-6 rounded-xl bg-white shadow-sm";

      const iconContainer = document.createElement("div");
      iconContainer.className = "flex-shrink-0";

      const iconWrapper = document.createElement("div");
      iconWrapper.className = `w-6 h-6 rounded border-2 border-${colorScheme.primaryColor} flex items-center justify-center`;

      const icon = document.createElement("i");
      icon.className = `fas fa-check text-${colorScheme.primaryColor} text-sm`;

      iconWrapper.appendChild(icon);
      iconContainer.appendChild(iconWrapper);

      const textElem = document.createElement("p");
      textElem.className = `text-${colorScheme.subduedTextColor}`;
      textElem.textContent = item;

      checklistItem.appendChild(iconContainer);
      checklistItem.appendChild(textElem);
      container.appendChild(checklistItem);
    });

    section.appendChild(container);
    return section;
  }

  function createBackToTopButton(options = {}) {
    // Define default color scheme, using options to override if provided
    const colorScheme = {
      primaryColor: "purple-900",
      solidButtonHover: "purple-800",
      ...(options.colorScheme || {}),
    };

    // Set button color and hover color from color scheme or options
    const { color = `bg-${colorScheme.primaryColor}`, hoverColor = `hover:bg-${colorScheme.solidButtonHover}` } = options;

    // Create button element
    const button = document.createElement("button");
    button.className = `fixed bottom-8 right-8 w-12 h-12 ${color} text-white rounded-lg shadow-lg flex items-center justify-center ${hoverColor} transition-colors float back-to-top opacity-0 invisible`;
    button.innerHTML = `<i class="fas fa-arrow-up"></i>`;

    // Add floating animation style
    const style = document.createElement("style");
    style.textContent = `
    @keyframes float {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-10px); }
    }
    .float { animation: float 6s infinite ease-in-out; }
  `;
    document.head.appendChild(style);

    // Visibility toggle function
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        button.classList.remove("opacity-0", "invisible");
        button.classList.add("opacity-100", "visible");
      } else {
        button.classList.add("opacity-0", "invisible");
        button.classList.remove("opacity-100", "visible");
      }
    };

    // Scroll to top on button click
    button.addEventListener("click", (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });

    // Listen for scroll events
    window.addEventListener("scroll", toggleVisibility);

    return button;
  }

  return {
    createNavigation,
    createHero,
    createLeadCapture,
    createFeatureChecklist,
    createFeatureHighlights,
    createKeyOutcomes,
    createOfferOverviewWithCTA,
    createValuePropositionBlocks,
    createFAQCollapsed,
    createFAQQuick,
    createPricing,
    createSocialProof,
    createFooter,
    createBackToTopButton,
  };
})();
