# Helithre-vue

**TL;DR 😉**: Helithre allows you to create pages and forms in Vue using JSON configuration.

> ⚠️ This library is not affiliated with or officially endorsed by the Vue.js team.

Helithre is a Vue.js-based framework that lets you build entire pages and forms declaratively using just JSON. You can define fields and page structures without writing markup code, making the development of dynamic interfaces much faster.

Helithre is also built to make it easier to receive information about which fields or page blocks to show from a server and render them dynamically.

## Getting Started

### Basic Usage

Helithre uses a single component `<helithreLoad>` that renders either forms or pages based on JSON configuration:

```vue
<template>
  <helithreLoad 
    :helithreJson="yourJsonConfiguration"
    @helithreEvent="handleEvent">
  </helithreLoad>
</template>

<script setup>
const yourJsonConfiguration = {
  // Your JSON config here
}

const handleEvent = (event) => {
  // Handle events here
}
</script>

```

### Core JSON Structure

Every Helithre configuration follows this basic structure:

```json
{
  "name": "uniqueName",
  "wrapper": "form" | "page",
  "childrens": [...],
  "responses": [...] // Optional, only for forms
}

```

**Properties:**

-   **name**: Unique identifier for your form/page
-   **wrapper**: Type of content (`"form"` or `"page"`)
-   **childrens**: Array of fields (for forms) or blocks (for pages)
-   **responses**: Pre-filled values for form fields (optional)

----------

# Forms

Forms allow users to input data through various field types. When users interact with the form, you receive callbacks with the data.

## Simple Form Example

```vue
<template>
  <helithreLoad 
    :helithreJson="formConfig"
    @helithreEvent="onFormSubmit">
  </helithreLoad>
</template>

<script setup>
import HelithreLoad from 'helithre-vue'
const formConfig = {
  name: 'contactForm',
  wrapper: 'form',
  childrens: [
    {
      text: 'Your Name',
      id: 'user_name',
      type: 'text'
    },
    {
      text: 'Email Address', 
      id: 'user_email',
      type: 'email'
    },
    {
      text: 'Profile Type',
      id: 'user_profile_type',
      type: 'select',
      choices: [
        {
          text: 'Admin',
          questionAnswerId: 'ADMIN'
        },
        {
          text: 'User',
          questionAnswerId: 'USER'
        }
      ]
    },
    {
      text: 'Message',
      id: 'user_message',
      type: 'text'
    }
  ]
}

// This function is called when the form is submitted
const onFormSubmit = (event) => {
  console.log('Form submitted:', event)
  // Handle form submission
}
</script>

```

## Form Field Structure

Each form field requires these properties:

```json
{
  "text": "Field Label",
  "id": "unique_field_id", 
  "type": "field_type"
}

```

**Required Properties:**

-   **text**: The label displayed to users
-   **id**: Unique identifier for the field (used in responses)
-   **type**: The type of input field

**Additional Properties (depending on type):**

-   **choices**: Array of options for select fields

### Select Field Structure

Select fields require an additional `choices` property:

```json
{
  "text": "Profile Type",
  "id": "user_profile_type",
  "type": "select",
  "choices": [
    {
      "text": "Admin",
      "questionAnswerId": "ADMIN"
    },
    {
      "text": "User", 
      "questionAnswerId": "USER"
    }
  ]
}

```

**Select Properties:**

-   **choices**: Array of option objects
-   **choices[].text**: Display text for the option
-   **choices[].questionAnswerId**: Value sent when this option is selected

## Supported Form Field Types


`text`

Text input

`email`

Email input

`password`

Password input

`number`

Number input

`date`

Date picker

`time`

Time picker

`color`

Color picker

`range`

Range slider

`file`

File upload

`tel`

Telephone

`url`

URL input

`search`

Search input

`month`

Month picker

`week`

Week picker

`datetimeLocal`

Date/time picker

`hidden`

Hidden field

`checkbox`

Checkbox

`select`

Dropdown selection

`reset`

Reset button

## Form with Pre-filled Values

You can pre-fill form fields using the `responses` array:

```json
{
  "name": "userProfile",
  "wrapper": "form", 
  "childrens": [
    {
      "text": "Name",
      "id": "user_name",
      "type": "text"
    },
    {
      "text": "Email",
      "id": "user_email", 
      "type": "email"
    }
  ],
  "responses": [
    {
      "id": "user_name",
      "value": "Name"
    },
    {
      "id": "user_email",
      "value": "email"
    }
  ]
}

```

## Form Event Handling

When users **submit** the form, you receive an event object through the `@helithreEvent` callback:

```javascript
{
  "name": "contactForm",      // The form name
  "type": "form",             // Always "form" for forms
  "results": {
    "save": [                 // New/changed values
      ["user_name", "Name"],
      ["user_email", "email"],
      ["user_profile_type", "ADMIN"]
    ],
    "edit": {},               // Modified existing values  
    "delete": {}              // Deleted values
  }
}

```

**Event Properties:**

-   **save**: Array of `[fieldId, value]` pairs with new or changed data
-   **edit**: Object containing modified existing values
-   **delete**: Object containing deleted values

**Note:** The callback is triggered on form submission, not on individual field changes.

## Form Styling

Style forms using the `.helithreForm` CSS class:

Here is an example on how to style:
```css
/* General form styling */
.helithreForm {
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
}

/* All form inputs */
.helithreForm input {
  width: 100%;
  padding: 0.75rem;
  margin-bottom: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
}

/* Specific input types */
.helithreForm input[type="email"] {
  background-color: #f8f9ff;
}

/* Specific field by ID */
.helithreForm #user_name {
  font-weight: bold;
}

```
You can use the class selector above to apply your styles. If you want to style a specific element, just use its ID instead.

# Pages

> ⚠️ Pages are a new feature with limited functionality

Pages display content blocks like text, images, videos, and lists. Unlike forms, pages are primarily for displaying information.

## Simple Page Example

```vue
<template>
  <helithreLoad 
    :helithreJson="pageConfig">
  </helithreLoad>
</template>

<script setup>
import HelithreLoad from 'helithre-vue'
const pageConfig = {
  name: 'welcomePage',
  wrapper: 'page',
  childrens: [
    {
      text: 'Welcome to our website!',
      id: 'welcome_text',
      type: 'text'
    },
    {
      text: 'Company Logo',
      id: 'logo_image',
      src: 'https://example.com/logo.jpg',
      type: 'image'
    }
  ]
}
</script>

```

## Page Block Structure

Each page block has this basic structure:

```json
{
  "text": "Block Title/Content",
  "id": "unique_block_id",
  "type": "block_type"
}

```

Some block types require additional properties like `src` for media or `elements` for lists.

## Supported Page Block Types

### Text Blocks

Display text content:

```json
{
  "text": "This is a text block",
  "id": "intro_text", 
  "type": "text"
}

```

### Image Blocks

Display images:

```json
{
  "text": "Image description", 
  "id": "hero_image",
  "src": "image_link",
  "type": "image"
}

```

### Video Blocks

Display videos:

```json
{
  "text": "Video title",
  "id": "promo_video",
  "src": "video_link", 
  "type": "video"
}

```

### Link Blocks

Create clickable links:

```json
{
  "text": "Visit our website",
  "id": "website_link",
  "src": "link",
  "type": "link"
}

```

### List Blocks

Display lists of items:

```json
{
  "text": "Features",
  "id": "feature_list",
  "type": "list",
  "elements": [
    {
      "id": "feature1",
      "value": "Easy to use"
    },
    {
      "id": "feature2", 
      "value": "Fast setup"
    }
  ]
}

```

## Complete Page Example

```json
{
  "name": "productPage",
  "wrapper": "page",
  "childrens": [
    {
      "text": "Welcome to Our Product",
      "id": "page_title",
      "type": "text"
    },
    {
      "text": "Product Demo", 
      "id": "demo_video",
      "src": "video_url",
      "type": "video"
    },
    {
      "text": "Product Image",
      "id": "product_image", 
      "src": "image_url",
      "type": "image"
    },
    {
      "text": "Key Features",
      "id": "features",
      "type": "list",
      "elements": [
        { "id": "f1", "value": "Fast performance" },
        { "id": "f2", "value": "Easy integration" },
        { "id": "f3", "value": "Great documentation" }
      ]
    },
    {
      "text": "Learn More",
      "id": "docs_link",
      "src": "link", 
      "type": "link"
    }
  ]
}

```

## Page Styling

Style pages using the specific component classes.
Here is an example:

```css
/* Image blocks */
.helithrePageImage {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

/* Text blocks */
.helithrePageText {
  margin: 1.5rem 0;
  line-height: 1.6;
  font-size: 1.1rem;
  color: #333;
}

/* Link blocks */
.helithrePageLink {
  color: #007bff;
  text-decoration: none;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border: 2px solid #007bff;
  border-radius: 4px;
  display: inline-block;
  transition: all 0.3s;
}

.helithrePageLink:hover {
  background-color: #007bff;
  color: white;
}

/* Video blocks */
.helithrePageVideo {
  width: 100%;
  max-width: 800px;
  height: auto;
  border-radius: 8px;
}

/* List blocks */
.helithrePageList {
  background-color: #f8f9fa;
  padding: 1.5rem;
  border-radius: 8px;
  border-left: 4px solid #007bff;
}

.helithrePageList li {
  margin: 0.75rem 0;
  padding: 0.5rem 0;
  border-bottom: 1px solid #e9ecef;
  list-style-type: none;
  position: relative;
  padding-left: 1.5rem;
}

.helithrePageList li::before {
  content: "✓";
  color: #28a745;
  font-weight: bold;
  position: absolute;
  left: 0;
}

/* Styling specific blocks by ID */
#page_title {
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
  color: #2c3e50;
  margin-bottom: 2rem;
}

#hero_image {
  width: 100%;
  max-height: 400px;
  object-fit: cover;
}

```

You can use the class selector above to apply your styles. If you want to style a specific element, just use its ID instead.
