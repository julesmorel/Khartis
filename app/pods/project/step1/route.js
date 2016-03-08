import Ember from 'ember';

export default Ember.Route.extend({
  
  renderTemplate: function() {
    this.render({ outlet: "main" });
  },
  
  model() {
    return this.modelFor('project');
  },
  
  setupController(controller, model) {
    this._super(controller, model);
  }
  
});
