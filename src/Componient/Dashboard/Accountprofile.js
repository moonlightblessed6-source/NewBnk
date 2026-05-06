import styled from "styled-components";





export const Account = styled.main`
font-size: 13px;
font-family: "Zalando Sans Expanded", sans-serif;
.Personal{
    width: 80%;
    margin: auto;
}

.otpd{
    padding: 20px 0px;
    font-size: 15px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 6px;
    cursor: pointer;
}

.myinfo {
    display: flex;
    justify-content: space-between;
    gap: 10px;
    border: 1px solid lightgray;
    align-items: center;
    padding: 20px;
}

.myinfo .smae{
    display: flex;
    flex-direction: column;
    gap: 6px;
    cursor: pointer;
}

.myinfodat{
        display: flex;
        justify-content: flex-start;
   flex-direction: column;
    gap: 6px;
    border: 1px solid lightgray;
    align-items: flex-start;
    padding: 20px;
    cursor: pointer;
}

.spann{
    color: green;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 6px;
    font-size: 15px;
    cursor: pointer;
}



.account{
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
    padding: 20px 0px;
}

.account div{
    display: flex;
    flex-direction: column;
    gap: 10px;
}
.account div span{
    font-size: 10px;
}
.account div p{
    font-size: 14px;
    color: green;
}


@media screen and (max-width: 925px) {

    .Personal{
    width: 95%;
}
}
`