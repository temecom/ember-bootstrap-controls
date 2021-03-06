import Ember from 'ember';
import layout from '../templates/components/bootstrap-textarea';
import InputableMixin from '../mixins/components/inputable';

export default Ember.Component.extend(InputableMixin, {
  layout: layout,

  classNames: ['form-group', 'bootstrap-textarea-component'],
  classNameBindings: ['hasSuccess:has-success', 'hasWarning:has-warning', 'showError:has-error'],

  placeholder: null,
  value: null,
  type: null,
  tabindex: 0,
  required: false,
});
