import styled from "styled-components";




export const Directdepositt = styled.main`
font-family: "Zalando Sans Expanded", sans-serif;

.direct-deposit{
    width: 80%;
    margin: 1rem auto;

}

.backedheader{
    display: flex;
    margin-block: 25px;
    gap: 7px;
    cursor: pointer;
    font-size: 16px;
    justify-content: flex-start;
    align-items: center;
}

.header{
    display: flex;
    flex-direction: column;
    gap: 4px;
}
.header h2{
    font-size: 16px;
}
.header p{
    font-size: 14px;
}




.ul{
    padding: 20px 0px;
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.ul div{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    
    gap: 7px;
}

.ul div span{
    padding: 10px 10px;
    border-radius: 10px;
    background-color: lightgray;
    color: green;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
}

.mymain{
    font-size: 12px;
    font-weight: 500;
}
.mywrites{
    font-size: 10px;
    border: none;
}


.account{
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.mainsnss{
    font-size: 14px;
}

.account-details{
    display: flex;
    flex-direction: column;
    /* border-bottom: 1px solid lightgray; */

}

.account-details p{
        display: flex;
        justify-content: flex-start;
        align-items: center;
    border-bottom: 1px solid lightgray;
    padding: 15px 0px;
    gap: 10px;
    font-size: 14px;

}


.disclosures{
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.disclosures p{
    font-size: 13px;
}





@media screen and (max-width: 925px) {
    .direct-deposit{
    width: 95%;
   

}
}
`