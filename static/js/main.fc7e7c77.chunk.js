(this["webpackJsonpreact-learnings"]=this["webpackJsonpreact-learnings"]||[]).push([[0],{10:function(e,t,n){e.exports=n(15)},15:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(1),i=n.n(r);var c=n(7),u=n(9),s=n(2),o=n(3),m=n(5),d=n(4),p=n(6),h=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(m.a)(this,Object(d.a)(t).call(this,e))).state={newItem:"",list:[]},n}return Object(p.a)(t,e),Object(o.a)(t,[{key:"updateInput",value:function(e,t){this.setState(Object(u.a)({},e,t))}},{key:"addItem",value:function(){var e={id:1+Math.random(),value:this.state.newItem.slice()},t=Object(c.a)(this.state.list);t.push(e),this.setState({list:t,newItem:""})}},{key:"deleteItem",value:function(e){var t=Object(c.a)(this.state.list);console.log(t);var n=t.filter((function(t){return t.id!==e}));this.setState({list:n})}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"todo-item"},l.a.createElement("div",null,"Add an item...",l.a.createElement("input",{type:"text",placeholder:"Type item here...",value:this.state.newItem,onChange:function(t){return e.updateInput("newItem",t.target.value)}}),l.a.createElement("button",{onClick:function(){return e.addItem()}},"Add item"),l.a.createElement("br",null),l.a.createElement("ol",null,this.state.list.map((function(t){return l.a.createElement("li",{key:t.id},t.value,l.a.createElement("button",{onClick:function(){return e.deleteItem(t.id)}},"X"))})))))}}]),t}(a.Component);var v=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{style:{padding:19}},l.a.createElement("div",{class:"imgDiv"},l.a.createElement("img",{src:"http://uploads.mixer.com/avatar/jf7qalfa-8499245.jpg",style:{width:150,height:150}}),l.a.createElement("div",{style:{display:"flex",flexDirection:"column",alignContent:"center",paddingLeft:40}},l.a.createElement("h4",null,this.props.profile.name),l.a.createElement("p",null,"Age: ",this.props.profile.age,l.a.createElement("br",null),"Bio: ",this.props.profile.bio))))}}]),t}(l.a.Component);l.a.Component;var f=function(){return l.a.createElement("div",{className:"contacts"},l.a.createElement(h,null))};var E=function(){return new Date,l.a.createElement("div",null,l.a.createElement(f,null))};var b=function(){return l.a.createElement("div",null,l.a.createElement(E,null))};i.a.render(l.a.createElement(b,null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.fc7e7c77.chunk.js.map