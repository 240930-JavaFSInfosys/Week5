/* In this component, props is of <any> type. What is props? 

Props is the data sent in from a parent component (the PROPerties the child takes)
ParentComponent will render ChildComponent in its TSX, and pass its state to the child

ParentComponent will send a state object containing a value color and animal
The props value in the Child will be the EXACT data sent from the parent's state*/
export const ChildComponent:React.FC<any> = ({color, animal}) => {

    return(
        <div>
            
        </div>
    )

}