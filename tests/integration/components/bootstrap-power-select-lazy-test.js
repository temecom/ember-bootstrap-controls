import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('bootstrap-power-select-lazy', 'Integration | Component | bootstrap power select lazy', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{bootstrap-power-select-lazy}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#bootstrap-power-select-lazy}}
      template block text
    {{/bootstrap-power-select-lazy}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
