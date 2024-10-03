import React from 'react';

const Profile = () => {
  return (
    <section id="profile">
      <div className="basic_box">
      <span class="intro">"저를 소개합니다"</span>
      <h1 className='mb-5 black_font flex_underline'><i class="ri-links-line"></i><span className="block_underline">Profile</span></h1>
      <h4 className='mb-5 profile_me'>신입 개발자 이재권을 소개합니다.</h4>
      <div className="profile_box ">
        <div className="pr_in_box">
        <div className="pr_d_box">
        <i class="ri-account-circle-fill pr-ft_size text-c"></i>
        <div className='mt-3 mx-4'>
        <h5>이름</h5>
        <div className='ft-size-p'>이재권</div>
        </div>
        </div>
        </div>

        <div className="pr_in_box">
        <div className="pr_d_box">
        <i class="ri-calendar-fill pr-ft_size text-c"></i>
        <div className='mt-3 mx-4'>
        <h5>생년월일</h5>
        <div className='ft-size-p'>96.03.16</div>
        </div>
        </div>
        </div>

        <div className="pr_in_box">
        <div className="pr_d_box">
        <i class="ri-map-pin-user-fill pr-ft_size text-c"></i>
        <div className='mt-3 mx-4'>
        <h5>주소지</h5>
        <div className='ft-size-p'>경기도 김포시</div>
        </div>
        </div>
        </div>

        <div className="pr_in_box">
        <div className="pr_d_box">
        <i class="ri-phone-fill pr-ft_size text-c"></i>
        <div className='mt-3 mx-4'>
        <h5>연락처</h5>
        <div className='ft-size-p'>010-2516-6621</div>
        </div>
        </div>
        </div>
        
        <div className="pr_in_box">
        <div className="pr_d_box">
        <i class="ri-mail-line pr-ft_size text-c"></i>
        <div className='mt-3 mx-4'>
        <h5>이메일</h5>
        <div className='ft-size-p'>dlwornjs0316@gmail.com</div>
        </div>
        </div>
        </div>

        <div className="pr_in_box">
        <div className="pr_d_box">
        <i class="ri-pencil-fill pr-ft_size text-c"></i>
        <div className='mt-3 mx-4'>
        <h5>학력</h5>
        <div className='ft-size-p'>배재대학교</div>
        <div className='ft-size-p'>(전자공학과)</div>
        </div>
        </div>
        </div>
      </div>
      
      <div className="profile_banner mt-5 text-c">
        <h5 className='profile_text'>*문의는 연락처 및 이메일로 연락 부탁드립니다.</h5>
      </div>
      
      </div>
    </section>
  );
}

export default Profile;