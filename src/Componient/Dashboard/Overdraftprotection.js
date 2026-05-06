import styled from "styled-components";




export const Overdraft = styled.main`
font-family: "Zalando Sans Expanded", sans-serif;


.maiana{
width: 80%;
margin: auto;
}
.headers{
        display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 8px;
    padding: 20px 0px;
    cursor: pointer;
    text-transform: uppercase;
    font-size: 14px;
}

.mysite{
    display: flex;
    flex-direction: column;
    gap: 6px;
  
}

.mysite p{
 font-size: 12px;
}

.mysite h3{
    font-size: 13px;
}



.mayss8{
    display: flex;
    flex-direction: column;
    gap: 20px ;
    font-size: 15px;
    padding: 20px 0px;
    font-size: 13px;
}


.setsts p{
line-height: 20px;
font-size: 13px;
padding: 10px 0px;
}

.burr{
    display: flex;
    justify-content: center;
    align-items: center;

}

.burr button{
    padding: 10px 20px;
    background-color: green;
    border: none;
    border-radius: 8px;
    color: white;
    font-size: 14px;
font-family: "Zalando Sans Expanded", sans-serif;
cursor: pointer;
}




@media screen and (max-width: 925px) {
    
    .headers{
        width: 100%;
    }

    .maiana{
    width: 95%;
}
}

`