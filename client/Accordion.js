import React from 'react';
import AccordionPane from './AccordionPane';

class Accordion extends React.Component {

  render() {
    var panes = [];
    var data = this.props.data || [];

    data.forEach(function(item) {
      panes.push(
        <AccordionPane data={item} key={item.id} />
      );
    });

    return (
      <div className='accordion'>
        {panes}
      </div>
    );
  }
}

module.exports = Accordion;