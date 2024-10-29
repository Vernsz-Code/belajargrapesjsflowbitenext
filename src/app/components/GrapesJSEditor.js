"use client"; // Menandakan bahwa komponen ini berjalan di sisi klien

import { useEffect } from "react";
import grapesjs from "grapesjs";
import "grapesjs/dist/css/grapes.min.css";
import "flowbite";
import countdownPlugin from "grapesjs-component-countdown";
import typedPlugin from 'grapesjs-typed';

const GrapesJSEditor = () => {
  useEffect(() => {
    // Inisialisasi GrapesJS
    const editor = grapesjs.init({
      container: "#gjs",
      fromElement: false,
      height: "600px",
      width: "auto",
      plugins: [countdownPlugin, typedPlugin],
      pluginsOpts: {
        [countdownPlugin]: {}, // opsional, konfigurasi tambahan bisa ditambahkan di sini
        [typedPlugin]: {}, // opsional, konfigurasi tambahan bisa ditambahkan di sini
      },
      canvas: {
        styles: [
          "https://cdn.jsdelivr.net/npm/flowbite@2.5.2/dist/flowbite.min.css",
        ],
        scripts: [
          "https://cdn.jsdelivr.net/npm/flowbite@2.5.2/dist/flowbite.min.js",
        ],
      },
      storageManager: false,
      blockManager: {
        blocks: [
          // Basic Category
          {
            id: "empty-column",
            label: "1 Column",
            media: `
              <div style="display: flex; justify-content: center; align-items: center; width: 100%; height: 100%; padding: 0;">
                <svg style="width:32px;height:32px" viewBox="0 0 24 24">
                  <path d="M3,3V21H21V3H3M19,19H5V5H19V19Z" />
                </svg>
              </div>
            `,
            content: `
              <div style="display: flex; flex-direction: column; justify-content: flex-start; align-items: stretch; width: 100%; min-height: 100px; border: 1px dashed #ccc; padding: 10px;">
                <!-- Drop content here -->
              </div>
            `,
            category: "Basic",
          },
          {
            id: "two-column",
            label: "2 Columns",
            media: `
              <div style="display: flex; justify-content: center; align-items: center; width: 100%; height: 100%; padding: 0;">
                <svg style="width:32px;height:32px" viewBox="0 0 24 24">
                  <rect x="3" y="4" width="8" height="16" style="fill:none;stroke:white;stroke-width:1;" />
                  <rect x="13" y="4" width="8" height="16" style="fill:none;stroke:white;stroke-width:1;" />
                </svg>
              </div>
            `,
            content: `
              <div style="display: flex; justify-content: space-between; width: 100%; min-height: 100px; border: 1px dashed #ccc; padding: 10px; gap: 10px;">
                <div style="flex: 1; min-height: 100px; border: 1px dashed #ccc; padding: 10px;">
                  <!-- Column 1 - Drop content here -->
                  </div>
                  <div style="flex: 1; min-height: 100px; border: 1px dashed #ccc; padding: 10px;">
                  <!-- Column 2 - Drop content here -->
                  </div>
                  </div>`,
            category: "Basic",
          },
          {
            id: "three-column",
            label: "3 Columns",
            media: `
                    <div style="display: flex; justify-content: center; align-items: center; width: 100%; height: 100%; padding: 0;">
                      <svg style="width:32px;height:32px" viewBox="0 0 24 24">
                        <rect x="3" y="4" width="6" height="16" style="fill:none;stroke:white;stroke-width:1;" />
                        <rect x="9" y="4" width="6" height="16" style="fill:none;stroke:white;stroke-width:1;" />
                        <rect x="15" y="4" width="6" height="16" style="fill:none;stroke:white;stroke-width:1;" />
                      </svg>
                    </div>
                  `,
            content: `
                    <div style="display: flex; justify-content: space-between; width: 100%; min-height: 100px; border: 1px dashed #ccc; padding: 10px; gap: 10px;">
                      <div style="flex: 1; min-height: 100px; border: 1px dashed #ccc; padding: 10px;">
                        <!-- Column 1 - Drop content here -->
                      </div>
                      <div style="flex: 1; min-height: 100px; border: 1px dashed #ccc; padding: 10px;">
                        <!-- Column 2 - Drop content here -->
                      </div>
                      <div style="flex: 1; min-height: 100px; border: 1px dashed #ccc; padding: 10px;">
                        <!-- Column 3 - Drop content here -->
                      </div>
                    </div>`,
            category: "Basic",
          },
          {
            id: "row-with-two-column-3-7",
            label: "2 Columns 3/7",
            media: `
                    <div style="display: flex; justify-content: center; align-items: center; width: 100%; height: 100%; padding: 0;">
                      <svg style="width:32px;height:32px" viewBox="0 0 24 24">
                        <rect x="3" y="4" width="6" height="16" style="fill:none;stroke:white;stroke-width:1;" />
                        <rect x="11" y="4" width="10" height="16" style="fill:none;stroke:white;stroke-width:1;" />
                      </svg>
                    </div>
                  `,
            content: `
                    <div class="row" style="display: flex; width: 100%; min-height: 100px; border: 1px dashed #ccc; padding: 10px;">
                      <div class="column" style="flex: 3; min-height: 100px; border: 1px dashed #ccc; padding: 10px;">
                        <!-- Column 1 (3/10) - Drop content here -->
                      </div>
                      <div class="column" style="flex: 7; min-height: 100px; border: 1px dashed #ccc; padding: 10px;">
                        <!-- Column 2 (7/10) - Drop content here -->
                      </div>
                    </div>
                  `,
            category: "Basic",
          },
          {
            id: "basic-text",
            label: "Text",
            content: '<div data-gjs-type="text">Insert your text here</div>',
            category: "Basic",
          },
          {
            id: "section",
            label: "Text Section",
            media: `
              <div style="display: flex; justify-content: center; align-items: center; width: 100%; height: 100%; padding: 0;">
                <svg style="width:32px;height:32px" viewBox="0 0 24 24">
                  <rect x="2" y="4" width="20" height="2" fill="white" />
                  <rect x="2" y="10" width="20" height="2" fill="white" />
                  <rect x="2" y="16" width="10" height="2" fill="white" />
                </svg>
              </div>
            `,
            content: `
              <section style="padding: 20px; background-color: #f9f9f9; border: 1px solid #ccc;">
                <h1 style="font-weight: bold; font-size: 24px;">Insert title here</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </section>
            `,
            category: "Basic",
          },
          {
            id: "basic-image",
            label: "Image",
            content: { type: "image" },
            activate: true,
            category: "Basic",
          },

          {
            id: "basic-video",
            label: "Video",
            content: `
              <div class="video-container">
                <video width="320" height="240" controls>
                  <source src="movie.mp4" type="video/mp4">
                  Your browser does not support the video tag.
                  </video>
                  </div>
            `,
            category: "Basic",
          },

          // Forms Category
          {
            id: "form-input",
            label: "Input",
            content:
              '<input type="text" placeholder="Enter text" class="border rounded-md p-2" />',
            category: "Forms",
          },
          {
            id: "form-textarea",
            label: "Textarea",
            content:
              '<textarea class="border rounded-md p-2" placeholder="Enter your text here"></textarea>',
            category: "Forms",
          },
          {
            id: "form-button",
            label: "Button",
            content:
              '<button class="bg-blue-500 text-white px-4 py-2">Submit</button>',
            category: "Forms",
          },

          {
            id: "block-product-categories",
            label: "Product Categories",
            content: `
              <div class="flex flex-wrap justify-between p-6 bg-gray-50">
                <div class="flex items-center justify-center w-full sm:w-1/2 md:w-1/4 p-4">
                  <div class="max-w-xs bg-white rounded-lg shadow-md overflow-hidden">
                    <img class="w-full h-48" src="https://flowbite.com/docs/images/products/product1.jpg" alt="Product 1" />
                    <div class="p-4">
                      <h2 class="font-bold text-lg">Category 1</h2>
                      <p class="text-gray-700">Description for Category 1.</p>
                    </div>
                    </div>
                    </div>
                    </div>
            `,
            category: "Blocks",
          },
          {
            id: "block-call-to-action",
            label: "Call to Action",
            content: `
              <div class="bg-blue-600 p-6 rounded-lg text-center text-white">
                <h2 class="text-2xl font-bold mb-2">Ready to Get Started?</h2>
                <p class="mb-4">Join our community and take the first step towards your goals!</p>
                </div>
            `,
            category: "Blocks",
          },
        ],
      },
    });

    editor.Components.addType("checkbox-simple", {
      model: {
        defaults: {
          traits: [
            {
              type: "text",
              label: "Checkbox Label",
              name: "checkboxLabel",
              changeProp: 1,
            },
          ],
          // Konten HTML untuk checkbox
          content: `
            <div class="flex items-center">
              <input type="checkbox" id="checkboxInput" class="form-checkbox h-4 w-4 text-blue-600" />
              <label id="checkboxLabel" for="checkboxInput" class="ml-2 cursor-pointer text-gray-700">
                Checkbox Label
              </label>
            </div>
          `,
          // Tambahkan beberapa style default untuk komponen
          style: {
            margin: "10px",
            padding: "10px",
            border: "1px solid #ddd",
          },
        },

        init() {
          // Update label saat properti berubah
          this.listenTo(this, "change:checkboxLabel", this.updateCheckboxLabel);
        },

        updateCheckboxLabel() {
          const labelText = this.get("checkboxLabel") || "Checkbox Label";
          const label = this.view.el.querySelector("#checkboxLabel");
          if (label) {
            label.innerHTML = labelText;
          }
        },
      },
    });

    // Buat block untuk komponen baru yang bisa ditambahkan ke editor
    editor.Blocks.add("checkbox-simple-block", {
      label: "Checkbox",
      attributes: { class: "fa fa-check-square" }, // Ikon blok
      content: { type: "checkbox-simple" }, // Konten blok yang merupakan tipe komponen kustom
      category: "Forms",
    });
    editor.BlockManager.add("form-block", {
      label: `
        <div class="flex flex-col items-center">
          <img src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' stroke='white'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M3 3h18a2 2 0 012 2v14a2 2 0 01-2 2H3a2 2 0 01-2-2V5a2 2 0 012-2z'/><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M3 7h18'/><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M7 11h10'/><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M3 15h10'/></svg>" 
          alt="Form Logo" class="inline-block h-8 w-8 mb-4" /> 
          <span>Form</span>
        </div>
      `,
      content: `
        <form class="form-block p-4 border rounded shadow-md bg-white">
          <div class="mb-4">
            <label for="name" class="block text-sm font-medium text-gray-700">Nama:</label>
            <input type="text" id="name" name="name" required class="mt-1 block w-full border border-gray-300 rounded-md p-2" />
          </div>
          <div class="mb-4">
            <label for="email" class="block text-sm font-medium text-gray-700">Email:</label>
            <input type="email" id="email" name="email" required class="mt-1 block w-full border border-gray-300 rounded-md p-2" />
          </div>
          <div class="mb-4">
            <label for="message" class="block text-sm font-medium text-gray-700">Pesan:</label>
            <textarea id="message" name="message" required class="mt-1 block w-full border border-gray-300 rounded-md p-2" rows="4"></textarea>
          </div>
          <button type="submit" class="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Kirim</button>
        </form>
      `,
      category: "Forms",
    });

    // Jika Anda ingin menyimpan data saat formulir dikirim
    editor.on("form:submit", (formData) => {
      console.log("Data formulir:", formData);
    });

    const toggleTabScript = function () {
      const tabs = this.querySelectorAll("[data-tabs-target]"); // Mengakses semua tombol tab
      const tabContents = this.querySelectorAll("[role='tabpanel']"); // Mengakses semua konten tab

      tabs.forEach((tab) => {
        tab.addEventListener("click", function () {
          const targetId = this.getAttribute("data-tabs-target"); // Dapatkan id target tab yang diklik

          // Sembunyikan semua konten tab
          tabContents.forEach((content) => {
            content.classList.add("hidden");
          });

          // Hapus class hidden dari konten tab yang dipilih
          const targetContent = document.querySelector(targetId);
          if (targetContent) {
            targetContent.classList.remove("hidden");
          }

          // Update active state pada tab
          tabs.forEach((t) => {
            t.classList.remove("border-purple-600", "text-purple-600");
          });
          this.classList.add("border-purple-600", "text-purple-600");
        });
      });

      // Menghilangkan teks placeholder saat pengguna mulai mengetik
      tabContents.forEach((content) => {
        const placeholderText = content.innerText.trim();

        content.addEventListener("focus", function () {
          if (this.innerText === placeholderText) {
            this.innerText = ""; // Kosongkan placeholder saat pengguna mulai mengetik
          }
        });

        content.addEventListener("blur", function () {
          if (this.innerText.trim() === "") {
            this.innerText = placeholderText; // Tampilkan kembali placeholder jika tidak ada teks yang diisi
          }
        });
      });
    };

    editor.Components.addType("tabs-with-toggle", {
      model: {
        defaults: {
          script: toggleTabScript,
          content: `
            <div class="mb-4 border-b border-gray-200 dark:border-gray-700">
                <ul class="flex flex-wrap -mb-px text-sm font-medium text-center" id="default-styled-tab" role="tablist">
                    <li class="me-2" role="presentation">
                        <button class="inline-block p-4 border-b-2 rounded-t-lg border-purple-600 text-purple-600" id="profile-styled-tab" data-tabs-target="#styled-profile" type="button" role="tab">Tab1</button>
                    </li>
                    <li class="me-2" role="presentation">
                        <button class="inline-block p-4 border-b-2 rounded-t-lg" id="dashboard-styled-tab" data-tabs-target="#styled-dashboard" type="button" role="tab">Tab2</button>
                    </li>
                    <li class="me-2" role="presentation">
                        <button class="inline-block p-4 border-b-2 rounded-t-lg" id="settings-styled-tab" data-tabs-target="#styled-settings" type="button" role="tab">Tab3</button>
                    </li>
                    <li role="presentation">
                        <button class="inline-block p-4 border-b-2 rounded-t-lg" id="contacts-styled-tab" data-tabs-target="#styled-contacts" type="button" role="tab">Tab4</button>
                    </li>
                </ul>
            </div>
            <div id="default-styled-tab-content">
                <div class="p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="styled-profile" role="tabpanel" contenteditable="true">
                    <p class="text-sm text-gray-500 dark:text-gray-400">Isi konten Tab1 di sini...</p>
                </div>
                <div class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="styled-dashboard" role="tabpanel" contenteditable="true">
                    <p class="text-sm text-gray-500 dark:text-gray-400">Isi konten Tab2 di sini...</p>
                </div>
                <div class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="styled-settings" role="tabpanel" contenteditable="true">
                    <p class="text-sm text-gray-500 dark:text-gray-400">Isi konten Tab3 di sini...</p>
                </div>
                <div class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="styled-contacts" role="tabpanel" contenteditable="true">
                    <p class="text-sm text-gray-500 dark:text-gray-400">Isi konten Tab4 di sini...</p>
                </div>
            </div>
          `,
        },
      },
    });

    editor.Blocks.add("quote-block", {
      id: "quote-block",
      label: "Quote",
      content: `
        <blockquote data-gjs-highlightable="true" data-gjs-type="text" class="quote" style="font-style: italic; padding: 10px; border-left: 5px solid #ccc;">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ipsum dolor sit
        </blockquote>
      `,
      category: "Basic",
      attributes: { class: "fa fa-quote-left" }, // Optional icon in blocks panel
    });

    // Define the quote component type
    editor.Components.addType("text", {
      model: {
        defaults: {
          tagName: "blockquote",
          classes: ["quote"],
          traits: [
            {
              type: "text",
              label: "Quote Text",
              name: "content", // Trait to edit the quote text
              changeProp: 1, // Trigger change event
            },
          ],
        },
      },
      view: {
        onRender() {
          const model = this.model;

          // Update the inner text when the trait changes
          model.on("change:content", () => {
            this.el.innerText = model.get("content");
          });
        },
      },
    });

    editor.Blocks.add("map-block", {
      id: "map-block",
      label: `
         <div style="display: flex; flex-direction: column; align-items: center;">
      <svg viewBox="0 0 24 24" style="width: 45px; margin-bottom: 10px;">
        <path fill="currentColor" d="M20.5,3L20.34,3.03L15,5.1L9,3L3.36,4.9C3.15,4.97 3,5.15 3,5.38V20.5A0.5,0.5 0 0,0 3.5,21L3.66,20.97L9,18.9L15,21L20.64,19.1C20.85,19.03 21,18.85 21,18.62V3.5A0.5,0.5 0 0,0 20.5,3M10,5.47L14,6.87V18.53L10,17.13V5.47M5,6.46L8,5.45V17.15L5,18.31V6.46M19,17.54L16,18.55V6.86L19,5.7V17.54Z"></path>
      </svg>
      <span>Maps</span>
    </div>
      `,
      content: `
        <div data-gjs-type="map" class="map-container" style="width: 100%; height: 400px; position: relative;">
          <iframe src="https://maps.google.com/maps?&amp;z=10&amp;t=q&amp;output=embed" frameborder="0" class="gjs-no-pointer" style="height: 100%; width: 100%;"></iframe>
        </div>
      `,
      category: "Basic",
    });

    // Define the map component type
    editor.Components.addType("map", {
      model: {
        defaults: {
          tagName: "div",
          classes: ["map"],
          traits: [
            {
              type: "text",
              label: "Address",
              name: "address",
              changeProp: 1,
            },
            {
              type: "select",
              label: "Map Type",
              name: "map_type",
              options: [
                { value: "q", name: "Roadmap" },
                { value: "sat", name: "Satellite" },
              ],
              changeProp: 1,
            },
            {
              type: "range",
              label: "Zoom",
              name: "zoom",
              min: 1,
              max: 21,
              step: 1,
              changeProp: 1,
            },
          ],
          resizable: {
            // Enable resizing
            minWidth: 300,
            minHeight: 200,
          },
        },
        updateMap() {
          const address = this.get("address");
          const mapType = this.get("map_type");
          const zoom = this.get("zoom");
          const iframe = this.getEl().querySelector("iframe");

          // Update the src attribute of the iframe based on settings
          iframe.src = `https://maps.google.com/maps?q=${encodeURIComponent(
            address
          )}&t=${mapType}&z=${zoom}&output=embed`;
        },
      },
      view: {
        onRender() {
          const model = this.model;

          // Listen for changes in traits
          model.on("change:address change:map_type change:zoom", () => {
            model.updateMap();
          });
        },
      },
    });

    editor.Blocks.add("tabs-toggle-block", {
      label: "Tabs with Toggle",
      content: { type: "tabs-with-toggle" },
      category: "Extra",
    });

    const toggleDropdownScript = function () {
      const dropdown = this.querySelector("#dropdown"); // Mengakses elemen dropdown
      const button = this.querySelector("#dropdownDefaultButton"); // Mengakses tombol dropdown

      if (dropdown && button) {
        button.addEventListener("click", function () {
          if (dropdown.classList.contains("hidden")) {
            dropdown.classList.remove("hidden");
            dropdown.classList.add("block");
          } else {
            dropdown.classList.remove("block");
            dropdown.classList.add("hidden");
          }
        });
      }

      console.log("Element:", this); // `this` mengacu pada elemen komponen
    };
    editor.Components.addType("dropdown-with-toggle", {
      model: {
        defaults: {
          script: toggleDropdownScript,
          traits: [
            {
              type: "text",
              label: "Button Text",
              name: "buttonText",
              changeProp: 1,
            },
            {
              type: "textarea",
              label: "Dropdown Items",
              name: "dropdownItems",
              changeProp: 1,
              placeholder:
                "Comma separated values (e.g. Dashboard,Settings,Earnings,Sign out)",
            },
          ],
          // Konten HTML untuk dropdown
          content: `
            <div class="flex justify-center">
              <div>
                <button id="dropdownDefaultButton" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
                  Dropdown button 
                  <svg class="w-2.5 h-2.5 ml-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                  </svg>
                </button>
                <div id="dropdown" class="hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                  <ul class="py-2 text-sm text-gray-700 dark:text-gray-200">
                    <li><a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a></li>
                    <li><a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a></li>
                    <li><a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a></li>
                    <li><a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a></li>
                  </ul>
                </div>
              </div>
            </div>
          `,
          style: {
            margin: "10px",
            padding: "10px",
            border: "1px solid #ddd",
          },
        },

        init() {
          this.listenTo(this, "change:buttonText", this.updateButtonText);
          this.listenTo(this, "change:dropdownItems", this.updateDropdownItems);
        },

        updateButtonText() {
          const buttonText = this.get("buttonText") || "Dropdown button";
          const button = this.view.el.querySelector("#dropdownDefaultButton");
          if (button) {
            button.innerHTML = `${buttonText} 
              <svg class="w-2.5 h-2.5 ml-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
              </svg>`;
          }
        },

        updateDropdownItems() {
          const items =
            this.get("dropdownItems") || "Dashboard,Settings,Earnings,Sign out";
          const itemList = items.split(",");
          const dropdown = this.view.el.querySelector("#dropdown ul");
          if (dropdown) {
            dropdown.innerHTML = itemList
              .map(
                (item) =>
                  `<li><a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">${item.trim()}</a></li>`
              )
              .join("");
          }
        },
      },
    });

    editor.Blocks.add("dropdown-toggle-block", {
      label:
        '<img src="https://flowbite.s3.amazonaws.com/block-thumbnails/application/filter-dropdown-dark.svg" alt="Dropdown Label" />',
      content: { type: "dropdown-with-toggle" },
      category: "Blocks",
    });

    // Define a new component type for Tooltip
    editor.Components.addType("tooltip", {
      model: {
        defaults: {
          tagName: "div",
          content: `
        <div class="tooltip-container">
          <span class="tooltip-text" style="display: none; background-color: rgba(165, 42, 42, 0.7); color: white; padding: 5px; border-radius: 5px; transition: opacity 0.3s ease; opacity: 0;"></span>
          <button class="tooltip-button" style="width: 100%; height: 100%; background: transparent; border: none; cursor: pointer;"></button>
        </div>
      `,
          traits: [
            {
              type: "text",
              label: "Tooltip Text",
              name: "tooltipText",
              changeProp: 1,
              default: "Tooltip text goes here",
            },
            {
              type: "select",
              label: "Position",
              name: "tooltipPosition",
              options: [
                { value: "top", name: "Top" },
                { value: "bottom", name: "Bottom" },
                { value: "left", name: "Left" },
                { value: "right", name: "Right" },
              ],
              changeProp: 1,
            },
            {
              type: "select",
              label: "Length",
              name: "tooltipLength",
              options: [
                { value: "one-line", name: "One Line" },
                { value: "small", name: "Small" },
                { value: "medium", name: "Medium" },
                { value: "large", name: "Large" },
                { value: "fit", name: "Fit to Content" },
              ],
              changeProp: 1,
            },
            {
              type: "checkbox",
              label: "Visible",
              name: "tooltipVisible",
              changeProp: 1,
              default: true,
            },
            {
              type: "button",
              label: "Style Tooltip",
              name: "styleTooltip",
              command: "style-tooltip",
            },
          ],
          style: {
            position: "relative",
            display: "inline-block",
            cursor: "pointer",
          },
        },

        init() {
          // Add listeners to update the tooltip content
          this.listenTo(this, "change:tooltipText", this.updateTooltip);
          this.listenTo(this, "change:tooltipPosition", this.updateTooltip);
          this.listenTo(this, "change:tooltipLength", this.updateTooltip);
          this.listenTo(this, "change:tooltipVisible", this.toggleTooltip);

          // Call updateTooltip after the element is rendered
          setTimeout(() => this.updateTooltip(), 0);
        },

        updateTooltip() {
          const tooltipText =
            this.get("tooltipText") || "Tooltip text goes here";
          const position = this.get("tooltipPosition") || "top";
          const length = this.get("tooltipLength") || "medium";
          const visible = this.get("tooltipVisible");

          const size =
            length === "small"
              ? 40
              : length === "medium"
              ? 70
              : length === "large"
              ? 100
              : length === "one-line"
              ? 60
              : 70;

          // Update the tooltip content with a white box and text
          this.set(
            "content",
            `
        <div class="tooltip-container" style="background-color: white; border: 1px solid #ccc; width: ${size}px; height: ${size}px; display: flex; align-items: center; justify-content: center;">
          <span class="tooltip-text" style="display: ${
            visible ? "block" : "none"
          }; background-color: rgba(165, 42, 42, 0.7); color: white; padding: 5px; border-radius: 5px; transition: opacity 0.3s ease; opacity: ${
              visible ? 1 : 0
            };">${tooltipText}</span>
          <button class="tooltip-button" style="width: 100%; height: 100%; background: transparent; border: none; cursor: pointer;"></button>
        </div>
      `
          );

          // Adjust tooltip position
          setTimeout(() => {
            const tooltipButton = this.getEl().querySelector(".tooltip-button");
            const tooltipTextElement =
              this.getEl().querySelector(".tooltip-text");

            if (tooltipButton && tooltipTextElement) {
              tooltipButton.onmouseover = () => {
                tooltipTextElement.style.display = "block";
                tooltipTextElement.style.opacity = 1;
                this.setTooltipPosition(
                  tooltipButton,
                  tooltipTextElement,
                  position
                );
              };

              tooltipButton.onmouseout = () => {
                tooltipTextElement.style.opacity = 0;
                setTimeout(() => {
                  tooltipTextElement.style.display = "none";
                }, 300);
              };
            }
          }, 0);
        },

        setTooltipPosition(button, tooltip, position) {
          const rect = button.getBoundingClientRect();
          tooltip.style.position = "absolute";

          switch (position) {
            case "top":
              tooltip.style.left = `${
                rect.left +
                window.scrollX +
                button.offsetWidth / 2 -
                tooltip.offsetWidth / 2
              } px`;
              tooltip.style.top = `${
                rect.top + window.scrollY - tooltip.offsetHeight
              } px`;
              break;
            case "bottom":
              tooltip.style.left = `${
                rect.left +
                window.scrollX +
                button.offsetWidth / 2 -
                tooltip.offsetWidth / 2
              } px`;
              tooltip.style.top = `${rect.bottom + window.scrollY} px`;
              break;
            case "left":
              tooltip.style.left = `${
                rect.left + window.scrollX - tooltip.offsetWidth
              } px`;
              tooltip.style.top = `${
                rect.top +
                window.scrollY +
                button.offsetHeight / 2 -
                tooltip.offsetHeight / 2
              } px`;
              break;
            case "right":
              tooltip.style.left = `${rect.right + window.scrollX} px`;
              tooltip.style.top = `${
                rect.top +
                window.scrollY +
                button.offsetHeight / 2 -
                tooltip.offsetHeight / 2
              } px`;
              break;
          }
        },

        toggleTooltip() {
          this.updateTooltip();
        },
      },
    });

    // Menambahkan blok tooltip ke kategori 'Extra' dengan logo pesan berwarna putih dan garis-garis hitam yang lebih tinggi dengan jarak
    editor.Blocks.add("tooltip", {
      label: `
    <div class="flex flex-col items-center">
      <img src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><path d='M3 1h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H5l-4 4v-4H1a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z' fill='white'></path><line x1='6' y1='6' x2='18' y2='6' stroke='black' stroke-width='2' /><line x1='6' y1='9' x2='18' y2='9' stroke='black' stroke-width='2' /><line x1='6' y1='12' x2='15' y2='12' stroke='black' stroke-width='2' /></svg>" 
      alt="Tooltip Logo" class="inline-block h-8 w-8 mb-4" /> 
      <span>Tooltip</span>
    </div>
  `,
      content: {
        type: "tooltip",
        content: "Tooltip",
      },
      category: "Extra",
    });

    // Menambahkan jenis komponen untuk custom code
    editor.DomComponents.addType("custom-code", {
      model: {
        defaults: {
          tagName: "div",
          draggable: true,
          droppable: false, // Tidak bisa men-drop elemen lain di dalamnya
          content: "Input your custom code here...",
        },
      },
      view: {
        onRender() {
          // Menampilkan popup saat komponen di-drop
          const modal = document.createElement("div");
          modal.innerHTML = `
        <div style="position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); background: #ffffff; padding: 20px; border: 1px solid #ccc; z-index: 1000; width: 600px; border-radius: 8px; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);">
          <div class="gjs-mdl-header" style="display: flex; justify-content: space-between; align-items: center;">
            <div class="gjs-mdl-title" style="font-size: 18px; color: #333; font-weight: bold;">Insert your code</div>
            <div class="gjs-mdl-btn-close" data-close-modal="" style="cursor: pointer; font-size: 24px; color: #999;">⨯</div>
          </div>
          <div class="gjs-mdl-content" style="margin-top: 15px;">
            <div id="gjs-mdl-c">
              <div class="gjs-custom-code" style="position: relative;">
                <pre id="lineNumbers" style="position: absolute; top: 0; left: 0; padding: 10px 0; margin: 0; border: none; background-color: #f0f0f0; color: #333; width: 40px; height: 200px; overflow: hidden; font-size: 12px; font-family: monospace; border-right: 1px solid #ddd; line-height: 1.5;"></pre>
                <textarea id="codeInput" style="width: calc(100% - 50px); height: 200px; padding: 10px; padding-left: 50px; resize: none; border: 1px solid #ddd; border-radius: 4px; background-color: #f9f9f9; font-family: monospace; font-size: 12px; line-height: 1.5; overflow-x: auto; white-space: pre;"></textarea>
                <button type="button" class="gjs-btn-prim gjs-btn-import__custom-code" style="margin-top: 10px; padding: 8px 16px; background-color: #007bff; color: white; border: none; border-radius: 4px; cursor: pointer;">Save</button>
              </div>
            </div>
          </div>
          <div style="clear:both"></div>
        </div>
        <div style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0, 0, 0, 0.7); z-index: 999;"></div>
      `;

          // Menambahkan modal ke body
          document.body.appendChild(modal);

          // Menangani event klik tombol close
          const closeButton = modal.querySelector(".gjs-mdl-btn-close");
          closeButton.addEventListener("click", () => {
            modal.style.display = "none"; // Sembunyikan modal alih-alih menghapusnya
          });

          // Menangani event klik tombol save
          const saveButton = modal.querySelector(
            ".gjs-btn-import__custom-code"
          );
          saveButton.addEventListener("click", () => {
            const codeInputValue = document.getElementById("codeInput").value;
            this.model.set("content", codeInputValue); // Set konten elemen custom code dengan input pengguna
            modal.style.display = "none"; // Sembunyikan modal setelah menyimpan
          });

          // Mendapatkan referensi ke textarea dan elemen line numbers
          const codeInput = modal.querySelector("#codeInput");
          const lineNumbers = modal.querySelector("#lineNumbers");

          // Fungsi untuk memperbarui nomor baris
          const updateLineNumbers = () => {
            const lines = codeInput.value.split("\n").length;
            let lineNumbersContent = "";
            for (let i = 1; i <= lines; i++) {
              lineNumbersContent += `${i}\n`;
            }
            lineNumbers.textContent = lineNumbersContent;
          };

          // Menangani event input pada textarea
          codeInput.addEventListener("input", updateLineNumbers);

          // Update nomor baris saat menggulir
          codeInput.addEventListener("scroll", () => {
            lineNumbers.scrollTop = codeInput.scrollTop;
          });

          // Inisialisasi nomor baris saat pertama kali
          updateLineNumbers();
        },
      },
    });

    // Menambahkan block custom code ke block manager
    editor.Blocks.add("custom-code-block", {
      label: "Custom Code",
      category: "Extra",
      attributes: { class: "fa fa-code" },
      content: {
        type: "custom-code",
      },
    });
    // Menambahkan blok untuk Link
    editor.Blocks.add("link", {
      label: "Link",
      content: {
        type: "link",
        content: "Click Here",
        attributes: { href: "#", target: "_blank" },
        style: {
          color: "#3490dc",
          "text-decoration": "underline",
          padding: "5px",
        },
      },
      category: "Basic",
    });

    // Menambahkan komponen untuk Link Block
    editor.Components.addType("link-block", {
      model: {
        defaults: {
          tagName: "a",
          attributes: { href: "#", target: "_blank", class: "link-block" },
          traits: [
            {
              type: "text",
              label: "URL",
              name: "href",
              changeProp: 1,
            },
            {
              type: "select",
              label: "Target",
              name: "target",
              options: [
                { id: "_self", name: "Same tab" },
                { id: "_blank", name: "New tab" },
              ],
            },
            {
              type: "textarea",
              label: "Link Content",
              name: "linkContent",
              changeProp: 1,
              placeholder: "Isi konten link block",
            },
          ],
          content: `
        <div style="color:#fff; background-color:#3490dc; padding:10px; border-radius:4px;">
          <p>Link Block Content</p>
        </div>
      `,
          style: {
            display: "block",
            color: "#3490dc",
            "text-decoration": "none",
            padding: "10px",
            "border-radius": "5px",
            "background-color": "#3490dc",
            color: "#fff",
          },
        },

        init() {
          this.listenTo(this, "change:href", this.updateHref);
          this.listenTo(this, "change:linkContent", this.updateContent);
        },

        updateHref() {
          this.addAttributes({ href: this.get("href") });
        },

        updateContent() {
          const content = this.get("linkContent") || "Link Block Content";
          this.components(content);
        },
      },
    });

    // Menambahkan blok untuk Link Block
    editor.Blocks.add("link-block", {
      label: "Link Block",
      content: { type: "link-block" },
      category: "Basic",
    });

    // Menambahkan komponen khusus untuk dropdown select
    editor.Components.addType("dynamic-select", {
      model: {
        defaults: {
          tagName: "select",
          attributes: { class: "dynamic-select" },
          traits: [
            {
              type: "textarea",
              label: "Options",
              name: "options",
              changeProp: 1,
              placeholder:
                "Masukkan opsi, pisahkan dengan '::' (contoh: opt1::opt2::opt3)",
            },
            {
              type: "checkbox",
              label: "Required",
              name: "required",
              changeProp: 1,
            },
          ],
          // Konten default
          content: `
        <option value="">Pilih...</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
      `,
          style: {
            padding: "5px",
            "border-radius": "4px",
            "border-color": "#ccc",
          },
        },

        // Inisialisasi event listener untuk memperbarui opsi dropdown dan atribut required
        init() {
          this.listenTo(this, "change:options", this.updateOptions);
          this.listenTo(this, "change:required", this.updateRequired);
        },

        // Method untuk memperbarui konten opsi dropdown
        updateOptions() {
          const optionsString = this.get("options") || "";
          const optionsArray = optionsString
            .split("::") // Pisahkan setiap opsi menggunakan '::'
            .map((option) => option.trim()) // Hapus spasi di sekitar setiap opsi
            .filter((option) => option); // Hapus entri kosong

          // Buat HTML untuk setiap option
          const optionsHTML = optionsArray
            .map(
              (option, index) =>
                `<option value="option${index + 1}">${option}</option>`
            )
            .join("");

          // Atur ulang komponen dropdown dengan opsi yang diperbarui
          this.components(`<option value="">Pilih...</option>${optionsHTML}`);
        },

        // Method untuk mengatur atribut required berdasarkan pilihan pengguna
        updateRequired() {
          const isRequired = this.get("required");
          if (isRequired) {
            this.addAttributes({ required: true });
          } else {
            this.removeAttributes("required");
          }
        },
      },
    });

    // Menambahkan blok untuk Dynamic Select
    editor.Blocks.add("dynamic-select", {
      label: "Select Dropdown",
      content: { type: "dynamic-select" },
      category: "Forms",
    });

    // Tambahkan komponen khusus untuk Label
    editor.Components.addType("custom-label", {
      model: {
        defaults: {
          tagName: "label",
          attributes: { class: "custom-label" },
          traits: [
            {
              type: "text",
              label: "Label Text",
              name: "labelText",
              changeProp: 1,
            },
            {
              type: "text",
              label: "For",
              name: "forAttribute",
              changeProp: 1,
              placeholder: "ID elemen yang dituju",
            },
          ],
          content: "Label",
          style: {
            color: "#333",
            "font-size": "14px",
          },
        },

        init() {
          this.listenTo(this, "change:labelText", this.updateLabelText);
          this.listenTo(this, "change:forAttribute", this.updateForAttribute);
        },

        updateLabelText() {
          const labelText = this.get("labelText") || "Label";
          this.components(labelText);
        },

        updateForAttribute() {
          const forValue = this.get("forAttribute");
          if (forValue) {
            this.addAttributes({ for: forValue });
          } else {
            this.removeAttributes("for");
          }
        },
      },
    });

    // Menambahkan blok untuk Label
    editor.Blocks.add("custom-label", {
      label: "Label",
      content: { type: "custom-label" },
      category: "Forms",
    });

    // Tambahkan blok radio ke editor
    editor.BlockManager.add("radio-block", {
      label: "Radio Button",
      content: {
        type: "custom-radio",
        // Mengatur default value jika diperlukan
        name: "myRadioGroup",
        checked: false,
        required: false,
      },
      category: "Forms",
    });

    // Buat komponen radio button yang dapat diatur
    editor.Components.addType("custom-radio", {
      model: {
        defaults: {
          tagName: "div",
          // Menambahkan properti untuk pengaturan
          name: "myRadioGroup",
          checked: false,
          required: false,
          traits: [
            {
              type: "text",
              name: "name",
              label: "Name",
            },
            {
              type: "text",
              name: "value",
              label: "Value",
            },
            {
              type: "checkbox",
              name: "checked",
              label: "Checked",
            },
            {
              type: "checkbox",
              name: "required",
              label: "Required",
            },
          ],
          // Render radio button
          attributes: {
            type: "radio",
            name: "myRadioGroup",
          },
          // Metode render
          render: function () {
            const { name, checked, required, value } = this.attributes;
            return `<input type="radio" name="${name}" value="${value}" ${
              checked ? "checked" : ""
            } ${required ? "required" : ""} />`;
          },
        },
      },
    });

    return () => {
      if (editor) editor.destroy(); // Pastikan editor dimusnahkan saat komponen di-unmount
    };
  }, []);

  return (
    <div className="editor-container">
      <div id="gjs" className="editor-panel"></div>
    </div>
  );
};

export default GrapesJSEditor;
