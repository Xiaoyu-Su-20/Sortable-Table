(function (React, ReactDOM) {
  'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
  var ReactDOM__default = /*#__PURE__*/_interopDefaultLegacy(ReactDOM);

  // used in getRowsData, create cells for each row
  var RenderRow = function (props) {
    return props.keys.map(function (key, index){
      return React__default['default'].createElement( 'td', { key: props.data[key] }, props.data[key])
    })
  };

  var Table = /*@__PURE__*/(function (superclass) {
    function Table(props){
        superclass.call(this, props);
        this.state = {
          data: props.data,
          asc_lst: Array(Object.keys(props.data[0]).length).fill(1)
        };
        this.getHeader = this.getHeader.bind(this);
        this.getRowsData = this.getRowsData.bind(this);
        this.getKeys = this.getKeys.bind(this);
        this.onClick = this.onClick.bind(this);
      }

    if ( superclass ) Table.__proto__ = superclass;
    Table.prototype = Object.create( superclass && superclass.prototype );
    Table.prototype.constructor = Table;

      Table.prototype.getKeys = function getKeys () {
        return Object.keys(this.state.data[0]);
      };

      // create the header
      Table.prototype.getHeader = function getHeader () {
        var keys = this.getKeys();
        return keys.map(function (key, index){
          return React__default['default'].createElement( 'th', { id: index }, key.toUpperCase())
        })
      };

      // create each row
      Table.prototype.getRowsData = function getRowsData () {
        var items = this.state.data;
        var keys = this.getKeys();
        return items.map(function (row, index){
          return React__default['default'].createElement( 'tr', null, React__default['default'].createElement( RenderRow, { data: row, keys: keys }) )
        })
      };

      // header on click sort
      Table.prototype.onClick = function onClick (event) {
        var col = event.target.textContent.toLowerCase(); // column name
        var col_num = event.target.id; // column number
        var asc_lst = this.state.asc_lst;  // the list keeping track of the order of each column
        var asc = asc_lst[col_num]; // the order of the current column
        var newdata = this.state.data; // dataset
        // sort data baseed on column and order
        newdata.sort(function(a, b){
                  return (a[col] == b[col]) ? 0 : ((a[col] > b[col]) ? asc : -1*asc);
        });

        // update dataset
        this.setState({data:newdata, asc: asc});
        // update order state
        // in order to modify the order list, write to the copied list and then write the list back
        asc_lst[col_num] = -1*asc_lst[col_num]; //
        this.setState({
          asc_lst: asc_lst
        });

        // console.log(this.state.asc_lst)
      };

      Table.prototype.render = function render () {
          return (
            React__default['default'].createElement( 'div', null, 
              React__default['default'].createElement( 'table', null, 
              React__default['default'].createElement( 'thead', { onClick: this.onClick }, 
                React__default['default'].createElement( 'tr', null, this.getHeader() )
              ), 
              React__default['default'].createElement( 'tbody', null, 
                this.getRowsData()
              )
              )
            )

          );
      };

    return Table;
  }(React__default['default'].Component));

  var App = function () {

    var data = [
            {'fruit': 'Apple', 'cost': 100, 'stock':20},
            {'fruit': 'Orange', 'cost': 50, 'stock':15},
            {'fruit': 'Banana', 'cost': 35, 'stock':11},
            {'fruit': 'Mango', 'cost': 70, 'stock':16},
            {'fruit': 'Pineapple', 'cost': 45, 'stock':18},
            {'fruit': 'Papaya', 'cost': 40, 'stock':25},
            {'fruit': 'Watermelon', 'cost': 35, 'stock':40}
    ];

    return (
      React__default['default'].createElement( React__default['default'].Fragment, null,
        React__default['default'].createElement( Table, { data: data })
      )
    );
  };

  var rootElement = document.getElementById("root");
  ReactDOM__default['default'].render(React__default['default'].createElement( App, null ), rootElement);

}(React, ReactDOM));
//# sourceMappingURL=bundle.js.map
