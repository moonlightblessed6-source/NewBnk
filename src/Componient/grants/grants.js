import styled from "styled-components";




export const Grant = styled.main`
font-family: "Zalando Sans Expanded", sans-serif;

.main{
    background-color: #112533;
    width: 100%;

  color: white;
    padding: 100px 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    gap: 10px;

}

.fisi{
    width: fit-content;
    padding: 7px 10px;
    border-radius: 12px;
    background-color: #28434d;
    font-size: 13px;
}



.Available{
    width: 90%;
    margin: auto;
    padding: 10px 0px;
}


.headey{
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    padding: 10px;
    gap: 10px;
}

 h1{
    font-size: 20px;
}


.boxs{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 15px;
    margin-block: 10px;
}

.boxs > .box {
    display: flex;
    flex-direction: column;
    gap: 8px;
    border-radius: 8px;
    padding: 10px 20px;
    box-shadow: 1px 1px 3px;
}

.goodsu{
    display: flex;
   gap: 15px;
   margin-block: 7px;
    justify-content: space-between;
    flex-direction: column;
}

.goodsu div{
 display: flex;
 justify-content: space-between;
 gap: 10px;
 font-size: 12px;
}

.goods{
    display: flex;
    flex-direction: column;
    font-size: 20px;
    justify-content: center;
    align-items: flex-start;
    gap: 10px;
    margin-block: 10px;
    
}

.goods svg{
    color: green;
    font-size: 16px;
}

h4{
    font-size: 15px;
}

.thep{
    font-size: 13px;
}

.goods span{
    font-size: 13px;
}

a{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 5px;
    font-size: 14px;
}






.howtoapply{
  background-color: #f9fafb;
  border: 1px solid #f9fafb;
  padding: 10px 0px;


}


.applys{
    text-align: center;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.applyboxs{
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
    width: 90%;
    margin: auto;
    padding: 20px 0px;
}

.applyboxs .applybox{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 10px;
}

.numes{
    padding: 20px;
    background-color: #e0f2fe;
    color: #0284c7;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: fit-content;
}



.spamsss{
    padding: 15px 15px;
    width: fit-content;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    font-size: 20px;
}

.readytoapply{
    background-color: #0b57d0;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 50px 0px;
    gap: 20px;
}

.readytoapply button{
    padding: 15px 20px;
     margin-left: 15px;
     border: none;
     border-radius: 8px;
     cursor: pointer;
     font-size: 16px;
     font-weight: 500;

}

.readytoapply button:nth-child(1){
   color: #0b57d0;
   
}
.readytoapply button:nth-child(2){
    background-color: #035f91;
    color: white;
}

button svg{
    vertical-align: middle;
}



@media screen and (max-width: 597px) {
    
    .boxs{
 
      display: flex;
   flex-direction: column;
}

.applyboxs{
   display: flex;
   flex-direction: column;

}

.div{
    display: flex;
    flex-direction: column;
    gap: 20px;
}

}

@media screen and (max-width: 963px) {
    
    .boxs{
 
    grid-template-columns: repeat(2, 1fr);
  
}

.applyboxs{
    grid-template-columns: repeat(2, 1fr);

}

}
`