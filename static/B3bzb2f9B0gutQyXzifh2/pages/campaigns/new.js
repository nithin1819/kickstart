(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"6NJg":function(t,e,a){"use strict";a.r(e);var n=a("o0o1"),r=a.n(n),i=a("1OyB"),o=a("vuIU"),u=a("JX7q"),s=a("Ji7U"),c=a("md7G"),l=a("foSv"),m=a("rePB"),g=a("q1tI"),p=a.n(g),f=a("vFsZ"),h=a("umxb"),b=a("TbSc"),d=a("QetY"),v=a("5Yp1"),w=a("OIDg"),C=a("oZBQ"),O=a("8cHP"),y=p.a.createElement;function S(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var a,n=Object(l.a)(t);if(e){var r=Object(l.a)(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return Object(c.a)(this,a)}}var j=function(t){Object(s.a)(a,t);var e=S(a);function a(){var t;Object(i.a)(this,a);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return t=e.call.apply(e,[this].concat(o)),Object(m.a)(Object(u.a)(t),"state",{minimumContribution:"",description:"",campaignName:"",target:"",imageUrl:"",errorMessage:"",loading:!1}),Object(m.a)(Object(u.a)(t),"onSubmit",(function(e){var a;return r.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return e.preventDefault(),t.setState({loading:!0,errorMessage:""}),n.prev=2,n.next=5,r.a.awrap(C.a.eth.getAccounts());case 5:return a=n.sent,n.next=8,r.a.awrap(w.a.methods.createCampaign(t.state.minimumContribution,t.state.campaignName,t.state.description,t.state.imageUrl,t.state.target).send({from:a[0]}));case 8:O.Router.pushRoute("/"),n.next=14;break;case 11:n.prev=11,n.t0=n.catch(2),t.setState({errorMessage:n.t0.message});case 14:t.setState({loading:!1});case 15:case"end":return n.stop()}}),null,null,[[2,11]],Promise)})),t}return Object(o.a)(a,[{key:"render",value:function(){var t=this;return y(v.a,null,y("h3",null,"Create a Campaign"),y(f.a,{onSubmit:this.onSubmit,error:!!this.state.errorMessage},y(f.a.Field,null,y("label",null,"Minimum Contribution"),y(h.a,{label:"wei",labelPosition:"right",value:this.state.minimumContribution,onChange:function(e){return t.setState({minimumContribution:e.target.value})}})),y(f.a.Field,null,y("label",null,"Campaign Name"),y(h.a,{value:this.state.campaignName,onChange:function(e){return t.setState({campaignName:e.target.value})}})),y(f.a.Field,null,y("label",null,"Campaign Description"),y(h.a,{value:this.state.description,onChange:function(e){return t.setState({description:e.target.value})}})),y(f.a.Field,null,y("label",null,"Owner Name"),y(h.a,{value:this.state.imageUrl,onChange:function(e){return t.setState({imageUrl:e.target.value})}})),y(b.a,{error:!0,header:"Oops!",content:this.state.errorMessage}),y(d.a,{loading:this.state.loading,primary:!0,type:"submit"},"Create!")))}}]),a}(g.Component);e.default=j},XWaF:function(t,e,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/campaigns/new",function(){return a("6NJg")}])}},[["XWaF",0,2,1,3,5,6]]]);