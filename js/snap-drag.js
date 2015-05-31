// example of how to make a plugin:
Snap.plugin( function( Snap, Element, Paper, global ) {
        Element.prototype.getCenter = function() {
                var bbox = this.getBBox();
                return [bbox.cx, bbox.cy]
                };
        Element.prototype.hDrag = function(){
          
        }
});
