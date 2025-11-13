import React,{ Component } from 'react';
class ClsComp extends Component {
    render(){
        return(
        <div className="news-ticker">
            <p>Class Component 1.	Container (news-ticker):	overflow: hidden; ensures that the content outside the container is hidden, creating the scrolling effect.
	2.	Text (p):white-space: nowrap; prevents text from wrapping to a new line. animation: scroll-right 10s linear infinite; animates the text from right to left over 10 seconds in an infinite loop.
	3.	Keyframes (@keyframes scroll-right):	transform: translateX(100%); starts the text just outside the right edge of the viewport. transform: translateX(-100%); moves it completely past the left edge.
	4.	Animation Speed:The 10s in animation defines how long it takes for one full scroll. Adjust this value to make the text scroll faster or slower.
	5.  Just added to check jenkinas thghdgfsdfghj
    </p>
        </div>)
    }
}
export default ClsComp
