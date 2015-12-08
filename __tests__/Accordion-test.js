jest.dontMock('../client/Accordion.js');
jest.dontMock('../client/AccordionPane.js');

import React from 'react';
import TestUtils from 'react-addons-test-utils';
const Accordion = require('../client/Accordion');
const AccordionPane = require('../client/AccordionPane');

describe('Accordion', function() {

  beforeEach(function() {
  });

  xit('should exist', function() {
    var accordion = TestUtils.renderIntoDocument( <Accordion /> );
    expect(TestUtils.isCompositeComponent(accordion)).toBeTruthy();
  });

  it('should build the layout from an array prop', function() {
    var input = [{
      id: 1,
      name: 'Title 1',
      content: 'Content 1',
      showOnLoad: true
    }, {
      id: 2,
      name: 'Title 2',
      content: 'Content 2',
      showOnLoad: true
    }];

    var accordion = TestUtils.renderIntoDocument( <Accordion data={input} /> );
    var headers = TestUtils.scryRenderedDOMComponentsWithClass(accordion, 'accordion-header');
    var contents = TestUtils.scryRenderedDOMComponentsWithClass(accordion, 'accordion-content');

    expect(headers.length).toEqual(2);
    expect(contents.length).toEqual(2);
    expect(headers[0].textContent).toEqual('Title 1');
    expect(headers[1].textContent).toEqual('Title 2');
    expect(contents[0].textContent).toEqual('Content 1');
    expect(contents[1].textContent).toEqual('Content 2');
  });

  it('should hide contents by default except with flag', function() {
    var input = [{
      id: 1,
      name: 'Title 1',
      content: 'Content 1'
    }, {
      id: 2,
      name: 'Title 2',
      content: 'Content 2',
      showOnLoad: true
    }];

    var accordion = TestUtils.renderIntoDocument( <Accordion data={input} /> );
    var contents = TestUtils.scryRenderedDOMComponentsWithClass(accordion, 'accordion-content');
    expect(contents.length).toEqual(1);
    expect(contents[0].textContent).toEqual('Content 2');
  });

  it('should be able to toggle the content by clicking on its title', function() {
    var input = [{
      name: 'Title 1',
      content: 'Content 1',
      id: 1
    }, {
      name: 'Title 2',
      content: 'Content 2',
      id: 2
    }];

    var accordion = TestUtils.renderIntoDocument( <Accordion data={input} /> );
    var headers = TestUtils.scryRenderedDOMComponentsWithClass(accordion, 'accordion-header');
    var content = TestUtils.scryRenderedDOMComponentsWithClass(accordion, 'accordion-content');

    expect(content.length).toEqual(0);
    TestUtils.Simulate.click(headers[0]);
    content = TestUtils.scryRenderedDOMComponentsWithClass(accordion, 'accordion-content');
    expect(content.length).toEqual(1);
    expect(content[0].textContent).toEqual('Content 1');
    TestUtils.Simulate.click(headers[0]);
    content = TestUtils.scryRenderedDOMComponentsWithClass(accordion, 'accordion-content');
    expect(content.length).toEqual(0);
  });

});