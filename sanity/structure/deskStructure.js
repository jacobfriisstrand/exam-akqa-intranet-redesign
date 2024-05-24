export const deskStructure = (S, context) =>
  S.list()
    .title("Base")
    .items([
      S.listItem()
        .title("Settings")
        .child(
          S.list()
            // Sets a title for our new list
            .title("Settings Documents")
            // Add items to the array
            // Each will pull one of our new singletons
            .items([
              S.listItem()
                .title("Site Settings")
                .child(
                  S.document()
                    .schemaType("siteSettings")
                    .documentId("siteSettings"),
                ),
              S.listItem()
                .title("Main Navigation")
                .child(
                  S.document()
                    .schemaType("navigation")
                    .documentId("navigation"),
                ),
            ]),
        ),
      // We also need to remove the new singletons from the main list
      ...S.documentTypeListItems().filter(
        (listItem) =>
          !["siteSettings", "navigation", "canteenMenuSchema"].includes(
            listItem.getId(),
          ),
      ),
      S.listItem()
        .title("Canteen Menu")
        .child(
          S.list()
            .title("Weekdays")
            .items([
              S.listItem()
                .title("Monday")
                .child(
                  S.document()
                    .title("Monday")
                    .schemaType("canteenMenuSchema")
                    .documentId("monday"),
                ),
              S.listItem()
                .title("Tuesday")
                .child(
                  S.document()
                    .title("Tuesday")
                    .schemaType("canteenMenuSchema")
                    .documentId("tuesday"),
                ),
              S.listItem()
                .title("Wednesday")
                .child(
                  S.document()
                    .title("Wednesday")
                    .schemaType("canteenMenuSchema")
                    .documentId("wednesday"),
                ),
              S.listItem()
                .title("Thursday")
                .child(
                  S.document()
                    .title("Thursday")
                    .schemaType("canteenMenuSchema")
                    .documentId("thursday"),
                ),
              S.listItem()
                .title("Friday")
                .child(
                  S.document()
                    .title("Friday")
                    .schemaType("canteenMenuSchema")
                    .documentId("friday"),
                ),
            ]),
        ),
    ]);
