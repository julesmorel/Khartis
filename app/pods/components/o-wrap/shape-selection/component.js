import WrapperAbstract from '../-abstract/component';
/* global Em */

export default WrapperAbstract.extend({

  shapes: ["circle", "rect", "line", "star", "times"],

  availableShapes: function() {
    return this.get('shapes').map( s => s );
  }.property()
  
});
