# Breakdance - Hide Topbar & Always Show Sidebars

## Description

This Breakdance website builder plugin dynamically toggles the visibility of the top bar and ensures that sidebars are consistently displayed upon page load. It is ideal for users seeking a more streamlined and personalized UI/UX within their WordPress admin pages. I also added a button for closing the left panel from element panel detail, so that it can be used even when the top bar is hidden. If you want to show the panel again, use the keyboard shortcut CTRL + A or CMD + A (like Add). This plugin utilizes jQuery for front-end interactions

## Features

- Hides the topbar on demand
- Adds a 'show' button to toggle the topbar back on
- Adds a 'close' button to elements panel
- Ensures sidebars are always visible
  

## Installation

1. Clone this repository or download the ZIP file and extract it.
2. Move the extracted folder to the wp-content/plugins/ directory of your WordPress installation, or perform a standard installation through the WordPress admin panel.
3. Navigate to `Plugins` and activate the "Breakdance - Hide Topbar & Always Show Sidebars" plugin.

## Usage

Once activated, the plugin automatically attaches buttons to toggle the visibility of the topbar. Clicking these buttons will hide or show the topbar as per your needs.

## Technical Details

- Language: PHP, JavaScript
- Dependencies: jQuery

### Hooked Actions

- `wp_head`: Adds jQuery and custom scripts to the head of the document.

### Important Files

- `breakdance-hide-topbar-script.js`: Contains the frontend jQuery code for hiding the topbar and showing the sidebars.

## Contributing

Feel free to submit pull requests or create issues to improve the plugin.

## Author

Created by [Codestormer.com](https://codestormer.com)

