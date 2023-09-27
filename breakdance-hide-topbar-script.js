/**
 * Executes code when the document is ready.
 *
 * If jQuery is not loaded in the parent window, it adds the jQuery script dynamically and then executes the code.
 * If jQuery is already loaded in the parent window, it immediately executes the code.
 *
 * @throws None.
 * @returns None.
 */
jQuery(document).ready(function () {
  if (!window.parent.jQuery) {
    var script = window.parent.document.createElement("script");
    script.src = "https://code.jquery.com/jquery-3.7.1.slim.min.js";
    script.type = "text/javascript";
    script.onload = executeCode;
    window.parent.document.head.appendChild(script);
  } else {
    executeCode();
  }

  function executeCode() {
    if (window.parent.jQuery) {
      var parentJQuery = window.parent.jQuery;

      parentJQuery(
        ".open-elements-toolbar-button, .open-structure-toolbar-button"
      )
        .on("click", function () {
          parentJQuery(this).next(".left-area, .right-area");
        })
        .click();

      const hideButton = $("<button>", {
        type: "button",
        class:
          "v-btn v-btn--outlined theme--dark elevation-0 v-size--default breakdance-toolbar-button",
      })
        .css({
          height: "37px",
          minWidth: "auto",
          margin: "0 10px",
        })
        .html(
          '<span class="v-btn__content"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m11.998 5c-4.078 0-7.742 3.093-9.853 6.483-.096.159-.145.338-.145.517s.048.358.144.517c2.112 3.39 5.776 6.483 9.854 6.483 4.143 0 7.796-3.09 9.864-6.493.092-.156.138-.332.138-.507s-.046-.351-.138-.507c-2.068-3.403-5.721-6.493-9.864-6.493zm8.413 7c-1.837 2.878-4.897 5.5-8.413 5.5-3.465 0-6.532-2.632-8.404-5.5 1.871-2.868 4.939-5.5 8.404-5.5 3.518 0 6.579 2.624 8.413 5.5zm-8.411-4c2.208 0 4 1.792 4 4s-1.792 4-4 4-4-1.792-4-4 1.792-4 4-4zm0 1.5c-1.38 0-2.5 1.12-2.5 2.5s1.12 2.5 2.5 2.5 2.5-1.12 2.5-2.5-1.12-2.5-2.5-2.5z" fill="#93C5FD"/></svg></svg></span>'
        );

      const showButton = $("<button>", {
        type: "button",
        class:
          "v-btn v-btn--outlined theme--dark elevation-0 v-size--default breakdance-toolbar-button",
      }).css({
        height: "37px",
        minWidth: "20px",
        padding: "0 16px",
        position: "fixed",
        zIndex: "9999",
        top: "9px",
        right: "325px",
        backgroundColor: "#38455E",
        transform: "translateX(-50%)",
        boxShadow: "0px 0px 40px 8px rgba(0,0,0,0.38)",
      }).html(`
              <span class="v-btn__content">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                <svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m17.069 6.546 2.684-2.359c.143-.125.32-.187.497-.187.418 0 .75.34.75.75 0 .207-.086.414-.254.562l-16.5 14.501c-.142.126-.319.187-.496.187-.415 0-.75-.334-.75-.75 0-.207.086-.414.253-.562l2.438-2.143c-1.414-1.132-2.627-2.552-3.547-4.028-.096-.159-.144-.338-.144-.517s.049-.358.145-.517c2.111-3.39 5.775-6.483 9.853-6.483 1.815 0 3.536.593 5.071 1.546zm2.319 1.83c.966.943 1.803 2.014 2.474 3.117.092.156.138.332.138.507s-.046.351-.138.507c-2.068 3.403-5.721 6.493-9.864 6.493-1.297 0-2.553-.313-3.729-.849l1.247-1.096c.795.285 1.626.445 2.482.445 3.516 0 6.576-2.622 8.413-5.5-.595-.932-1.318-1.838-2.145-2.637zm-3.434 3.019c.03.197.046.399.046.605 0 2.208-1.792 4-4 4-.384 0-.756-.054-1.107-.156l1.58-1.389c.895-.171 1.621-.821 1.901-1.671zm-.058-3.818c-1.197-.67-2.512-1.077-3.898-1.077-3.465 0-6.533 2.632-8.404 5.5.853 1.308 1.955 2.567 3.231 3.549l1.728-1.519c-.351-.595-.553-1.289-.553-2.03 0-2.208 1.792-4 4-4 .925 0 1.777.315 2.455.843zm-2.6 2.285c-.378-.23-.822-.362-1.296-.362-1.38 0-2.5 1.12-2.5 2.5 0 .36.076.701.213 1.011z" fill="#93C5FD"/></svg>/>
                </svg>
              </span>
            `);

      hideButton.on("click", function () {
        parentJQuery(".breakdance-top-bar-wrapper").toggle();
        parentJQuery("body").before(showButton);
        parentJQuery(showButton).show();
      });

      showButton.on("click", function () {
        parentJQuery(".breakdance-top-bar-wrapper").toggle();
        parentJQuery(showButton).hide();
      });

      parentJQuery(
        "div.undo-redo-top-bar-section.topbar-section.topbar-section-bl"
      ).before(hideButton);
    } else {
      setTimeout(executeCode, 50);
    }
  }
});