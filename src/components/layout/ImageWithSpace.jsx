<<<<<<< HEAD
import styled from "styled-components"


const WIDTH_BREAK= '700px'
=======
import styled from 'styled-components'


const WIDTH_BREAK= '700px';
>>>>>>> 4389f275f3e925532b25baeb740b85c60cf2984c

const StyledFlex= styled.div`
  display: flex;
`
<<<<<<< HEAD

const StyledImage = styled.div`
  background-image: url('${props=> props.image}');
  background-position: right;
  background-repeat: no-repeat;
  background-size: cover;
=======
const StyledImage= styled.div`
  background-image: url('${props=> props.image}');
  background-position:right;
  background-repeat: no-repeat;
  background-size:cover;
>>>>>>> 4389f275f3e925532b25baeb740b85c60cf2984c

  width: 100%;
  height: 100vh;

<<<<<<< HEAD
  @media (max-width: ${WIDTH_BREAK}){
    display: none;
=======
  @media (max-width:${WIDTH_BREAK}){
    display:none;
>>>>>>> 4389f275f3e925532b25baeb740b85c60cf2984c
  }
`

const StyledContainer= styled.div`
  background-color: ${props=> props.theme.white};
  padding: 30px 50px;

<<<<<<< HEAD
  @media ( min-width: ${WIDTH_BREAK} ){
    width: 70%; 
    min-width: calc(${WIDTH_BREAK}- 100px);
  }

  @media( max-width: ${WIDTH_BREAK}){
    width: 100%;
  }

  display: flex;
  flex-direction: column;
  

  height: calc(100vh -60px);
  overflow-y: auto;

  &: before, &: after {
=======
  @media (min-width:${WIDTH_BREAK}){
    min-width:calc(${WIDTH_BREAK} - 100px);
  }
  @media(max-width:${WIDTH_BREAK}){
    width: 100%;
  }

  display:flex;
  flex-direction: column;
  
  
  height: calc(100vh - 60px);
  overflow-y: auto;

  &:before, &:after{
>>>>>>> 4389f275f3e925532b25baeb740b85c60cf2984c
    content: '';
    margin: auto;
  }
`
<<<<<<< HEAD
 

 function ImageWithSpace({children, image}){
    return(
        <StyledFlex>
            <StyledImage image= {image}/>
            <StyledContainer>
                {children}
            </StyledContainer>
            
        </StyledFlex>
    )
}

ImageWithSpace.defaultProps= {
    image: '/coffee-background.jpg'
=======


function ImageWithSpace ({children, image}) {
    return(
    <StyledFlex>
        <StyledImage image={image}/>
        <StyledContainer>
            {children}
        </StyledContainer>

    </StyledFlex>
    )

}

ImageWithSpace.defaultProps={
    image:'/coffee-background.jpg'
>>>>>>> 4389f275f3e925532b25baeb740b85c60cf2984c
}

export default ImageWithSpace