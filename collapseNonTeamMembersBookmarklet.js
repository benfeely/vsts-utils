// To create bookmarklet...
// > New Bookmark
// > Set URL to: javascript:(function(){... INSERT FULL MINIFIED SCRIPT})();
(function () {
    var validNames = ['Ben Feely', 'Jane Doe'];
    var rows = document.getElementById('taskboard-table-body').getElementsByClassName('taskboard-row');
    var showRow = false;
    var hideRow = false;
    for (var i = 0; i < rows.length; i++) {
        var row = rows[i];
        if (showRow || hideRow) {
            row.style.display = showRow ? 'table-row' : 'none';
            hideRow = false;
            showRow = false;
        } else {
            var els = row.getElementsByClassName('identity-picker-resolved-name');
            var name = els.length ? els[0].innerHTML : '';

            if (validNames.includes(name)) {
                row.style.display = 'table-row';
                hideRow = true;
            } else {
                row.style.display = 'none';
                showRow = true;
            }
        }
    };
})();

// Minified...
(function(){for(var f,a=['Ben Feely','Jane Doe','Virender Mann'],b=document.getElementById('taskboard-table-body').getElementsByClassName('taskboard-row'),c=!1,d=!1,e=0;e<b.length;e++)if(f=b[e],c||d)f.style.display=c?'table-row':'none',d=!1,c=!1;else{var g=f.getElementsByClassName('identity-picker-resolved-name'),h=g.length?g[0].innerHTML:'';a.includes(h)?(f.style.display='table-row',d=!0):(f.style.display='none',c=!0)}})();
