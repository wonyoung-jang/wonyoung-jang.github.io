import * as params from '@params';

var fuse; // holds our search engine
var current_page_title = document.title;
console.log(current_page_title);

var searchInput = document.getElementById('searchInput');
var searchResults = document.getElementById('searchResults');
var inlineSearchInput = document.getElementById('inline-searchInput');
var inlineSearchResults = document.getElementById('inline-searchResults');

var first, last, current_elem = null;
var resultsAvailable = false;

// load our search index
window.onload = function () {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                var data = JSON.parse(xhr.responseText);
                console.log(data);
                if (data) {
                    // fuse.js options; check fuse.js website for details
                    var options = {
                        distance: 100,
                        threshold: 0.4,
                        ignoreLocation: true,
                        keys: [
                            'title',
                            'permalink',
                            'summary',
                            'content'
                        ]
                    };
                    if (params.fuseOpts) {
                        options = {
                            isCaseSensitive: params.fuseOpts.iscasesensitive ? params.fuseOpts.iscasesensitive : false,
                            includeScore: params.fuseOpts.includescore ? params.fuseOpts.includescore : false,
                            includeMatches: params.fuseOpts.includematches ? params.fuseOpts.includematches : false,
                            minMatchCharLength: params.fuseOpts.minmatchcharlength ? params.fuseOpts.minmatchcharlength : 1,
                            shouldSort: params.fuseOpts.shouldsort ? params.fuseOpts.shouldsort : true,
                            findAllMatches: params.fuseOpts.findallmatches ? params.fuseOpts.findallmatches : false,
                            keys: params.fuseOpts.keys ? params.fuseOpts.keys : ['title', 'permalink', 'summary', 'content'],
                            location: params.fuseOpts.location ? params.fuseOpts.location : 0,
                            threshold: params.fuseOpts.threshold ? params.fuseOpts.threshold : 0.4,
                            distance: params.fuseOpts.distance ? params.fuseOpts.distance : 100,
                            ignoreLocation: params.fuseOpts.ignorelocation ? params.fuseOpts.ignorelocation : true
                        };
                    }
                    fuse = new Fuse(data, options); // build the index from the json file
                }
            } else {
                console.log(xhr.responseText);
            }
        }
    };
    xhr.open('GET', "../index.json");
    xhr.send();
};

function activeToggle(ae) {
    document.querySelectorAll('.focus').forEach(function (element) {
        // rm focus class
        element.classList.remove("focus");
    });
    if (ae) {
        ae.focus();
        document.activeElement = current_elem = ae;
        ae.parentElement.classList.add("focus");
    } else {
        document.activeElement.parentElement.classList.add("focus");
    }
}

function reset() {
    resultsAvailable = false;
    if (searchInput) {
        searchInput.value = '';
    }
    if (inlineSearchInput) {
        inlineSearchInput.value = '';
    }
    if (searchResults) {
        searchResults.innerHTML = '';
    }
    if (inlineSearchResults) {
        inlineSearchResults.innerHTML = '';
    }
    if (searchInput) {
        searchInput.focus();
    } else if (inlineSearchInput) {
        inlineSearchInput.focus();
    }
}

function performSearch(inputElement, resultsElement) {
    if (fuse && inputElement && resultsElement) {
        const results = fuse.search(inputElement.value.trim());
        if (results.length !== 0) {
            let resultSet = '';
            for (let item in results) {
                resultSet += `<li class="post-entry"><header class="entry-header">${results[item].item.title}&nbsp;»</header>` +
                    `<a href="${results[item].item.permalink}" aria-label="${results[item].item.title}"></a></li>`;
            }
            resultsElement.innerHTML = resultSet;
            resultsAvailable = true;
            first = resultsElement.firstChild;
            last = resultsElement.lastChild;
        } else {
            resultsAvailable = false;
            resultsElement.innerHTML = '';
        }
    }
}

function attachListeners(inputElement, resultsElement) {
    if (inputElement) {
        inputElement.onkeyup = function (e) {
            if (e.key !== "Enter") {
                performSearch(inputElement, resultsElement);
            }
        };

        inputElement.addEventListener('search', function (e) {
            if (!this.value) {
                reset();
            }
        });
    }
}

attachListeners(searchInput, searchResults);
attachListeners(inlineSearchInput, inlineSearchResults);

// kb bindings
document.onkeydown = function (e) {
    let key = e.key;
    var ae = document.activeElement;

    let inbox = searchInput && document.getElementById("searchbox").contains(ae) ||
        inlineSearchInput && document.getElementById("inline-searchbox").contains(ae);

    if (key === "Enter") {
        if (ae === searchInput || ae === inlineSearchInput) {
            let inputElement = ae === searchInput ? searchInput : inlineSearchInput;
            let resultsElement = ae === searchInput ? searchResults : inlineSearchResults;
            performSearch(inputElement, resultsElement);
        }
    }

    if (ae === searchInput || ae === inlineSearchInput) {
        var elements = document.getElementsByClassName('focus');
        while (elements.length > 0) {
            elements[0].classList.remove('focus');
        }
    } else if (current_elem) {
        ae = current_elem;
    }

    if (key === "Escape") {
        reset();
    } else if (!resultsAvailable || !inbox) {
        return;
    } else if (key === "ArrowDown") {
        e.preventDefault();
        if (ae === searchInput || ae === inlineSearchInput) {
            activeToggle(ae.nextElementSibling.firstChild.lastChild);
        } else if (ae.parentElement != last) {
            activeToggle(ae.parentElement.nextSibling.lastChild);
        }
    } else if (key === "ArrowUp") {
        e.preventDefault();
        if (ae.parentElement == first) {
            activeToggle(ae.parentElement.previousElementSibling);
        } else if (ae !== searchInput && ae !== inlineSearchInput) {
            activeToggle(ae.parentElement.previousSibling.lastChild);
        }
    } else if (key === "ArrowRight") {
        ae.click();
    }
};