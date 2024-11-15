# UnifyUI

**This is a work in progress! This is a description of what the project will become**

UnifyUI is an **Accessible and Responsive Design System** built with both **Angular** and **React**. It provides a flexible, reusable set of UI components available in their native frameworks as well as **Web Components**, enabling compatibility with multiple frameworks and mobile platforms. UnifyUI aims to adhere to best practices in accessibility and responsive design while maintaining a unified experience across devices and technologies.

**Inspired by developers of all abilities who are committed to making the web a better and safer place for persons of all abilities,** UnifyUI is crafted with inclusivity at its core. We conduct usability testing with diverse groups of people, including those with a range of disabilities, to ensure that our components are accessible to all users. This commitment to real-world testing helps us address a variety of accessibility needs and optimize our design for everyone.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Third-Party Libraries](#third-party-libraries)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Usage](#usage)
- [Available Components](#available-components)
- [Contributing](#contributing)
- [License](#license)

---

## Overview

UnifyUI focuses on accessibility, responsiveness, and framework flexibility. The design system uses an **Nx monorepo** structure to house both Angular and React components, allowing seamless component sharing and consistent versioning across libraries. All components follow **WCAG 2.1** accessibility standards, and each is optimized for performance across desktop, mobile, and other MVC frameworks.

### Why Use UnifyUI?

- **Accessible**: All components are designed with accessibility in mind, using ARIA attributes and following accessibility best practices.
- **Responsive**: Components adapt seamlessly to various screen sizes for a consistent experience.
- **Framework-Agnostic**: Components are available as Angular components, React components, and **Web Components** that can be used in any framework.

## Features

- **Accessibility First**: Each component includes ARIA roles and keyboard navigation support.
- **Responsive Design**: Mobile, tablet, and desktop-friendly components.
- **Versatile Theming**: Easily customizable with CSS-in-JS, Styled Components, or standard CSS.
- **Web Component Compatibility**: Components can be consumed as Web Components, offering flexibility across frameworks.

## Third-Party Libraries

UnifyUI is built with several key libraries and tools to ensure accessibility, responsiveness, and performance:

- **Nx**: Monorepo management tool that enables shared libraries, component isolation, and efficient builds for Angular and React.
- **Storybook**: Used for component development, documentation, and showcasing examples. Each component is documented with accessibility and usage guidelines.
- **TypeScript**: Ensures type safety across Angular and React components, allowing for a more robust, error-free development experience.
- **React ARIA** and **Angular CDK**: Accessibility libraries that provide accessible interaction patterns for React and Angular components.
- **Stencil.js**: Transforms Angular and React components into Web Components, enabling cross-framework compatibility.
- **Emotion** and **Styled Components**: CSS-in-JS libraries used for dynamic, themeable styling.
- **Jest** and **React Testing Library**: Testing libraries for unit and integration tests in React.
- **Karma** and **Jasmine**: Testing tools for Angular component tests.

These libraries collectively provide the foundation for UnifyUI’s accessible, responsive, and cross-compatible design.

## Getting Started

### Prerequisites

- **Node.js** (version 14 or later)
- **npm** or **yarn**

### Installation

To add UnifyUI components to your project, you can install them as individual packages from the monorepo:

```bash
npm install @unifyui/button
npm install @unifyui/card
# or
yarn add @unifyui/button @unifyui/card
```

### Usage

1. **Using Native Components**: Import and use Angular or React components directly in their respective environments.

   ```jsx
   // React
   import { Button, Card } from '@unifyui/button';

   const App = () => (
     <div>
       <Button label="Click Me" />
       <Card title="Sample Card" content="This is some card content." />
     </div>
   );

   export default App;
   ```

   ```typescript
   // Angular
   import { ButtonModule } from '@unifyui/button';

   @NgModule({
     imports: [ButtonModule],
   })
   export class AppModule {}
   ```

2. **Using as Web Components**: Import the Web Component version of UnifyUI for framework-agnostic usage.
   ```html
   <script src="https://unpkg.com/@unifyui/webcomponents/button"></script>
   <unify-button label="Click Me"></unify-button>
   ```

## Available Components

| Component | Description                                          |
| --------- | ---------------------------------------------------- |
| Button    | Accessible, customizable button                      |
| Card      | Card component with title and content slots          |
| Input     | Accessible input field with label and error messages |
| Modal     | Focus-trap modal component for dialogs               |
| Dropdown  | Keyboard-navigable dropdown                          |
| Checkbox  | Customizable checkbox with accessible labels         |
| Switch    | Toggle switch for form controls                      |

Each component is documented in Storybook, including usage examples and accessibility guidelines. Check the Storybook for the full documentation [here](https://yourstorybooklink.com).

## Contributing

We welcome contributions! To contribute:

1. Fork the repository.
2. Create a new branch (`feature/new-component`).
3. Make your changes and add tests.
4. Submit a pull request with a description of your changes.

### Development

To run the project locally:

```bash
# Clone the repo
git clone https://github.com/yourusername/unifyui.git

# Navigate into the project directory
cd unifyui

# Install dependencies
npm install

# Start the development server
npm run storybook
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

We hope UnifyUI helps you build accessible and responsive user interfaces for your projects. Happy coding!
