import React, {useState} from 'react'
import styled, {css} from 'styled-components';
import BackToLogin from '../molecules/buttons/BackToLogin';
import PageHeader from '../organisms/PageHeader'
import Camera from '../atoms/buttons/icons/camera';
import Link from 'next/link';
import { useRouter } from 'next/router'
import { useMutation } from "../../lib/hooks"
import axios from 'axios'

const SignIn1 = (props) => {
    const [inputName, setInputName] = useState("");
    const [isGenderSelected, setGenderSelected] = useState("");
    const [inputPhoneNum, setInputPhoneNum] = useState("");
    const [isUnivSelected, setUnivSelected] = useState(0);
    const [inputNickName, setInputNickName] = useState("");
    const [inputAge, setInputAge] = useState();
    const [isPreferGenderSelected, setPreferGenderSelected] = useState(0);
    const [inputImageSrc, setInputImageSrc] = useState("");
    const [inputImageStr, setInputImageStr] = useState("");

    const router = useRouter();
    const { date } = router.query;
    const { time } = router.query;
    const { activity } = router.query;

    const handleUpload = e => {
        const file = e.target.files[0];
        setInputImageSrc(file);
        let reader = new FileReader();
        reader.onloadend = () => {
            console.log("load end");
          setInputImageStr(reader.result);
        };
        reader.readAsDataURL(file);
      };

    const handleImgSubmit = (e) => {
        const axios = require('axios');
        const FormData = require('form-data');

        const form_data = new FormData();
        form_data.append('image', inputImageSrc, 'image');
        console.log(form_data);
        let url = 'https://d2gv8trg60k042.cloudfront.net/accounts/auth/';
        axios.post(url, form_data, {
          headers: form_data.getHeaders(),
        })
            .then(res => {
              console.log(res.data);
            })
            .catch(err => console.log(err))
      };

    // const handleImgSubmit = (e) => {
    //     const sImg = inputImageSrc;
    //     e.preventDefault();
    //     console.log(inputImageSrc);
    //     let form_data = new FormData();
    //     form_data.append('image', sImg);
    //     let url = 'https://d2gv8trg60k042.cloudfront.net/accounts/auth/';
    //     // axios.post(url, form_data, {
    //     //   headers: {
    //     //     'content-type': 'multipart/form-data'
    //     //   }
    //     // })
    //     //     .then(res => {
    //     //       console.log(res.data);
    //     //     })
    //     //     .catch(err => console.log(err))

    //     fetch(url, {
    //         method: 'POST',
    //         headers: {'Content-Type': 'multipart/form-data'},
    //         body: form_data
    //     }).then( response => response.json() ).then( data => console.log(data))
    
    //   };


      const imgFunc = e => {
        handleUpload(e);
        handleImgSubmit(e);
    }


    const handleSubmit = () => {
        const result = useMutation('https://d2gv8trg60k042.cloudfront.net/accounts/userForm/',{
            user_name : inputName,
            gender : isGenderSelected,
            phone_num : inputPhoneNum,
            university : isUnivSelected,
            user_nickname : inputNickName,
            age : Number(inputAge),
            desired_gender_ratio : isPreferGenderSelected,
            // studentCard_image : inputImageSrc,
            date : date,
            time : time,
            activity : Number(activity)
        });
        console.log("success!")
    }

    return (
        <>
            <Wrapper>
                <SignWrapper>
                    <Title>신청 폼 작성</Title>
                    <FormsWrapper>
                        <RowWrapper>
                            <FormWrapper>
                                <FormTitle>이름</FormTitle>
                                <FormInput width={'14rem'} type="text" id="user_name" name="user_name" value={inputName} onChange={(e) => {setInputName(e.target.value)}} required></FormInput>
                            </FormWrapper>
                            <FormWrapper>
                                <FormTitle>성별</FormTitle>
                                <input type="hidden" id="gender" name="gender" value={isGenderSelected} required></input>
                                <RowWrapper>
                                    <Male selected={isGenderSelected} onClick={() => setGenderSelected("M")} style={{marginRight:'0.3rem'}}>남</Male>
                                    <Female selected={isGenderSelected} onClick={() => setGenderSelected("F")}>여</Female>
                                </RowWrapper>
                            </FormWrapper>
                        </RowWrapper>
                                <FormTitle>휴대폰 번호</FormTitle>
                                <FormInput width={'100%'} type="text" id="phone_num" name="phone_num" value={inputPhoneNum} onChange={(e) => {setInputPhoneNum(e.target.value)}} minLength="11" maxLength="11" placeholder="- 없이 숫자만 입력" required></FormInput>
                    
                                <FormTitle>학교</FormTitle>
                                <input type="hidden" id="university" name="university" value={isUnivSelected}></input>
                                <RowWrapper style={{marginBottom:'1.6rem'}}>
                                    <Sogang selected={isUnivSelected} onClick={() => setUnivSelected(1)}>서강</Sogang>
                                    <Yonsei selected={isUnivSelected} onClick={() => setUnivSelected(2)}>연세</Yonsei>
                                    <Ewha selected={isUnivSelected} onClick={() => setUnivSelected(3)}>이화</Ewha>
                                    <Hongik selected={isUnivSelected} onClick={() => setUnivSelected(4)}>홍익</Hongik>
                                </RowWrapper>


                                <RowWrapper>
                                    <FormWrapper>
                                        <FormTitle>닉네임</FormTitle>
                                        <FormInput width={'20.5rem'} type="text" id="user_nickname" name="user_nickname" value={inputNickName} onChange={(e) => {setInputNickName(e.target.value)}} maxLength="5" placeholder="5자 이내"></FormInput>
                                    </FormWrapper>
                                    <FormWrapper>
                                        <FormTitle>나이</FormTitle>
                                            <FormInput width={'7.3rem'} type="text" id="age" name="age" value={inputAge} onChange={(e) => {setInputAge(e.target.value)}} maxLength="2"></FormInput>
                                        </FormWrapper>
                                </RowWrapper>

                                <FormTitle>희망 성비</FormTitle>
                                <input type="hidden" id="desired_gender_ratio" name="desired_gender_ratio" value={isPreferGenderSelected}></input>
                                <RowWrapper style={{marginBottom:'1.6rem'}}>
                                    <Same selected={isPreferGenderSelected} onClick={() => setPreferGenderSelected(1)}>동성만</Same>
                                    <OneToOne selected={isPreferGenderSelected} onClick={() => setPreferGenderSelected(2)}>1:1</OneToOne>
                                    <DontCare selected={isPreferGenderSelected} onClick={() => setPreferGenderSelected(3)}>무관</DontCare>
                                    <Blank></Blank>
                                </RowWrapper>

                                <FormTitle>학교 인증하기</FormTitle>
                                <label for="studentCard_image">
                                    <InputBox>
                                        <NotUploaded uploaded={inputImageStr}>
                                            <BoxTitle>학생증 첨부하기</BoxTitle>
                                            <Camera></Camera>
                                            <Caution>
                                                모든 부분이 다 보이게 찍어주세요!<br/>
                                                확인이 되지 않는다면 재요청 문자가 전송될 수 있습니다.
                                            </Caution>
                                        </NotUploaded>
                                        <Uploaded uploaded={inputImageStr}>
                                            <StudentCardImg src={inputImageStr}></StudentCardImg>
                                        </Uploaded>
                                    </InputBox>
                                </label>
                                <input width={'100%'} type="file" id="studentCard_image" name="studentCard_image" onChange={handleUpload} style={{display:'none'}}></input>

                                <input type="hidden" id="date" name="date" value={date}></input>
                                <input type="hidden" id="time" name="time" value={time}></input>
                                <input type="hidden" id="activity" name="activity" value={activity}></input>
                    </FormsWrapper>
                    <Link href="/done"><a>
                        <Submit onClick={handleImgSubmit}>제출하기</Submit>
                    </a></Link>
                </SignWrapper>
                </Wrapper>
                </>
    );
  }

  const Wrapper = styled.div`
    width: 100%;
    height: fit-content;
    display:flex;
    flex-direction:column;
    align-items:center;
`

  const Title = styled.div`
    width: fit-content;
    height: fit-content;
    font-family: NotoSansCJKkr;
    font-size: 2.3rem;
    font-weight: 900;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.57;
    letter-spacing: 0.115rem;
    text-align: center;
    color: #2e9267;
    margin-bottom:6.5rem;
    margin-top:7.6rem;
`
  
const SignWrapper = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    width:81.6%;
    height:fit-content;
`
const FormsWrapper = styled.div`
    display:flex;
    flex-direction:column;
    width:100%;
    height:fit-content;

`

const RowWrapper = styled.div`
    display:flex;
    flex-direction:row;
    width:100%;
    justify-content:space-between;
    height:fit-content;
`

const FormWrapper = styled.div`
    width: fit-content
    display:flex;
    flex-direction:column;
    width:fit-content;
    height:fit-content;
`

const FormTitle = styled.div`
    width: fit-content;
    height: fit-content;
    font-family: NotoSansCJKkr;
    font-size: 1.5rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.47;
    letter-spacing: normal;
    text-align: left;
    color: #2e9267;
    margin-left:0.1rem;
    margin-bottom:0.6rem;
`

const FormInput = styled.input`
    width: ${props => props.width};
    height: 3.5rem;
    border:none;
    border-radius: 2rem;
    background-color: #dbf2ea;

    opacity: 0.55;
    font-family: NotoSansCJKkr;
    font-size: 1.5rem;
    font-weight: bolder;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.47;
    letter-spacing: normal;
    color: #2e9267;
    padding-left:1.9rem;

    :focus{
        outline:none;
    }

    ::placeholder,
    ::-webkit-input-placeholder {
    color: #2e9267;
    font-weight: normal;
    }
    :-ms-input-placeholder {
    color: #2e9267;
    font-weight: normal;
    }

    margin-bottom:1.4rem;
`
const Male = styled.div`
    width: 6.8rem;
    height: 3.5rem;
    border-radius: 2rem;

    ${props => {
        if(props.selected==="M"){
            return css `background-color:#2e9267`;
        }
        else{
            return css `background-color:#dbf2ea`; 
        }}
    };
    
    ${props => {
        if(!(props.selected==="M")){
            return css `opacity:0.55`;
        }}
    };
    ${props => {
        if(props.selected==="M"){
            return css `color:#ffffff`;
        }
        else{
            return css `color:#2e9267`; 
        }}
    };

    font-family: NotoSansCJKkr;
    font-size: 1.4rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 2.5;
    letter-spacing: normal;
    text-align: center;
`
const Female = styled.div`
    width: 6.8rem;
    height: 3.5rem;
    border-radius: 2rem;

    ${props => {
        if(props.selected==="F"){
            return css `background-color:#2e9267`;
        }
        else{
            return css `background-color:#dbf2ea`; 
        }}
    };
    
    ${props => {
        if(!(props.selected==="F")){
            return css `opacity:0.55`;
        }}
    };
    ${props => {
        if(props.selected==="F"){
            return css `color:#ffffff`;
        }
        else{
            return css `color:#2e9267`; 
        }}
    };

    font-family: NotoSansCJKkr;
    font-size: 1.4rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 2.5;
    letter-spacing: normal;
    text-align: center;
`

const Submit = styled.button`
    width: 9.4rem;
    height: 3.5rem;
    border-radius: 2rem;
    border:none;
    background-color: #61b28f;

    font-size: 1.4rem;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 2.4;
    letter-spacing: normal;
    text-align: center;
    color: #ffffff;

    margin-top:3.6rem;
    margin-bottom:3.6rem;
`

const StepIndicator = styled.div`
    width: fit-content;
    height: fit-content;
    font-family: NotoSansCJKkr;
    font-size: 1.7rem;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.29;
    letter-spacing: normal;
    text-align: center;
    color: #93cbb3;
`

const Sogang = styled.div`
    width: 6.9rem;
    height: 3.5rem;
    border-radius: 2rem;

    ${props => {
        if(props.selected===1){
            return css `background-color:#2e9267`;
        }
        else{
            return css `background-color:#dbf2ea`; 
        }}
    };

    ${props => {
        if(!(props.selected===1)){
            return css `opacity:0.55`;
        }}
    };
    ${props => {
        if(props.selected===1){
            return css `color:#ffffff`;
        }
        else{
            return css `color:#2e9267`; 
        }}
    };

    font-family: NotoSansCJKkr;
    font-size: 1.4rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 2.5;
    letter-spacing: normal;
    text-align: center;
`

const Yonsei = styled.div`
    width: 6.9rem;
    height: 3.5rem;
    border-radius: 2rem;

    ${props => {
        if(props.selected===2){
            return css `background-color:#2e9267`;
        }
        else{
            return css `background-color:#dbf2ea`; 
        }}
    };

    ${props => {
        if(!(props.selected===2)){
            return css `opacity:0.55`;
        }}
    };
    ${props => {
        if(props.selected===2){
            return css `color:#ffffff`;
        }
        else{
            return css `color:#2e9267`; 
        }}
    };

    font-family: NotoSansCJKkr;
    font-size: 1.4rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 2.5;
    letter-spacing: normal;
    text-align: center;
`

const Ewha = styled.div`
    width: 6.9rem;
    height: 3.5rem;
    border-radius: 2rem;

    ${props => {
        if(props.selected===3){
            return css `background-color:#2e9267`;
        }
        else{
            return css `background-color:#dbf2ea`; 
        }}
    };

    ${props => {
        if(!(props.selected===3)){
            return css `opacity:0.55`;
        }}
    };
    ${props => {
        if(props.selected===3){
            return css `color:#ffffff`;
        }
        else{
            return css `color:#2e9267`; 
        }}
    };

    font-family: NotoSansCJKkr;
    font-size: 1.4rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 2.5;
    letter-spacing: normal;
    text-align: center;
`
const Hongik = styled.div`
    width: 6.9rem;
    height: 3.5rem;
    border-radius: 2rem;

    ${props => {
        if(props.selected===4){
            return css `background-color:#2e9267`;
        }
        else{
            return css `background-color:#dbf2ea`; 
        }}
    };

    ${props => {
        if(!(props.selected===4)){
            return css `opacity:0.55`;
        }}
    };
    ${props => {
        if(props.selected===4){
            return css `color:#ffffff`;
        }
        else{
            return css `color:#2e9267`; 
        }}
    };

    font-family: NotoSansCJKkr;
    font-size: 1.4rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 2.5;
    letter-spacing: normal;
    text-align: center;
`
const Same = styled.div`
    width: 6.9rem;
    height: 3.5rem;
    border-radius: 2rem;

    ${props => {
        if(props.selected===1){
            return css `background-color:#2e9267`;
        }
        else{
            return css `background-color:#dbf2ea`; 
        }}
    };

    ${props => {
        if(!(props.selected===1)){
            return css `opacity:0.55`;
        }}
    };
    ${props => {
        if(props.selected===1){
            return css `color:#ffffff`;
        }
        else{
            return css `color:#2e9267`; 
        }}
    };

    font-family: NotoSansCJKkr;
    font-size: 1.4rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 2.5;
    letter-spacing: normal;
    text-align: center;
`

const OneToOne = styled.div`
    width: 6.9rem;
    height: 3.5rem;
    border-radius: 2rem;

    ${props => {
        if(props.selected===2){
            return css `background-color:#2e9267`;
        }
        else{
            return css `background-color:#dbf2ea`; 
        }}
    };

    ${props => {
        if(!(props.selected===2)){
            return css `opacity:0.55`;
        }}
    };
    ${props => {
        if(props.selected===2){
            return css `color:#ffffff`;
        }
        else{
            return css `color:#2e9267`; 
        }}
    };

    font-family: NotoSansCJKkr;
    font-size: 1.4rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 2.5;
    letter-spacing: normal;
    text-align: center;
`

const DontCare = styled.div`
    width: 6.9rem;
    height: 3.5rem;
    border-radius: 2rem;

    ${props => {
        if(props.selected===3){
            return css `background-color:#2e9267`;
        }
        else{
            return css `background-color:#dbf2ea`; 
        }}
    };

    ${props => {
        if(!(props.selected===3)){
            return css `opacity:0.55`;
        }}
    };
    ${props => {
        if(props.selected===3){
            return css `color:#ffffff`;
        }
        else{
            return css `color:#2e9267`; 
        }}
    };

    font-family: NotoSansCJKkr;
    font-size: 1.4rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 2.5;
    letter-spacing: normal;
    text-align: center;
`

const Blank = styled.div`
    width: 6.9rem;
    height: 3.5rem;
    border-radius: 2rem;

    background-color:#ffffff;

    font-family: NotoSansCJKkr;
    font-size: 1.4rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 2.5;
    letter-spacing: normal;
    text-align: center;
`

const InputBox = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;

    width:100%;
    min-height: 12.7rem;
    height:fit-content;
    border-radius: 1rem;
    border:none;
    background-color: rgba(219, 242, 234, 0.55);

    font-family: NotoSansCJKkr;
    font-size: 1.5rem;
    font-weight: bolder;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.47;
    letter-spacing: normal;
    color: #2e9267;

`
const BoxTitle = styled.div`
    width: fit-content;
    height: fit-content;
    font-family: NotoSansCJKkr;
    font-size: 1.3rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.69;
    letter-spacing: normal;
    text-align: center;
    color: #93cbb3;
    margin-top:1.6rem;
    margin-bottom:0.9rem;
`

const Caution = styled.div`
    width: fit-content;
    height: fit-content;
    font-family: NotoSansCJKkr;
    font-size: 0.9rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.56;
    letter-spacing: normal;
    text-align: center;
    color: #2e9267;
    margin-top:1.13rem;
`

const StudentCardImg = styled.img`
    width:95%;
    height:auto;
    padding:1rem;
    margin-bottom:1rem;
`

const NotUploaded = styled.div`
    display : flex;
    flex-direction:column;
    align-items:center;
    width:100%;
    height:fit-content
`
const Uploaded = styled.div`
    display : flex;
    flex-direction:column;
    align-items:center;
    width:100%;
    height:fit-content;
`
export default SignIn1