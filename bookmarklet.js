function _linkedclean() {
    // TODO: Try to find mailto: URLs and stick them in the summary.
    // TODO: Don't delete profile-applications, try to extract slideshare titles and URLs

    var d = document;

    // Delete nodes with the given IDs
    // Note that we're killing Recommendations from display, because these are always going
    // to be positive and biased opinions that may be distracting.
    var killIDs = ["header", "footer", "universal-typeahead-results", "section-header", "global-error", "extra",
                   "post-module", 
                   "profile-applications", "profile-personal", "profile-recommendations",
                   "ad-hdr", "ad-hdr-2b", "ad-slot-1", "ad-slot-2", "ad-slot-3"
                  ];
    while (killIDs.length) {
        var id = killIDs.pop();
        //alert("Removing ID: " + id);
        var node = d.getElementById(id);
        if (node) {
            node.parentNode.removeChild(node);
        }
    }

    // Delete nodes with the following class names
    var killClasses = ["profile-actions-tertiary-container",
                       "summary-current", "summary-past", "summary-education",
                       "organization-details", "recommendations", "reflist", "reflink",
                       "pubgroups", "network-degree", "flag-position",
                       "related-links"
                      ];
    while (killClasses.length) {
        var c = killClasses.pop();
        var list = d.getElementsByClassName(c);
        while (list.length) {
            list[0].parentNode.removeChild(list[0]);
        }
    }

    // Delete tags
    var killTags = ["iframe", "hr", "script", "noscript"];
    while (killTags.length) {
        var tag = killTags.pop();
        var list = d.getElementsByTagName(tag);
        while (list.length) {
            list[0].parentNode.removeChild(list[0]);
        }
    }

    // Set some styles to reflow the doc
    d.getElementById("body").setAttribute("style", "width:90%;");
    d.getElementById("content").setAttribute("style", "width:100%;");

    // Remove background images (icons) from links
    var list = d.getElementsByTagName("a");
    for (i = 0; i < list.length; i++) {
        list[i].setAttribute("style", "background:none;");
    } 

}
_linkedclean();
void(0)
