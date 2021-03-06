import React from 'react';
import { Link } from 'react-router-dom';
import ubicationLogo from '../../assets/images/ubicationLogo.svg';
import moneyLogo from '../../assets/images/money.svg';
import clockLogo from '../../assets/images/clock.svg';
import '../../assets/styles/components/jobCard/JobCard.scss';

const jobCard = (props) => {
  const { logo, time, jobTitle, location, salary, profile, id } = props;
  return (
    <article className='card-Container'>
      <figure className='logo-Container'>
        <img src={logo} className='img-Container' alt={jobTitle || 'Job Logo'} />
      </figure>
      <div className='general-Information'>
        <p className='update-Status'>New</p>
        <p className='pub-Time'>{time}</p>
        <h2>{jobTitle}</h2>
        <figure className='Logos'>
          <img src={ubicationLogo} className='Logitos' alt='ubicationLogo' />
          <figcaption>{location}</figcaption>

          <img src={moneyLogo} className='Logitos' alt='moneyLogo' />
          <figcaption>{salary}</figcaption>

          <img src={clockLogo} className='Logitos' alt='clockLogo' />
          <figcaption>Full Time</figcaption>
        </figure>
      </div>
      <div className='works'>
        <h4 className='worksNames works__profile'>{profile}</h4>
      </div>
      <div className='works'>
        <Link
          to={{
            pathname: '/job',
            search: `id=${id}`,
          }}
          className='worksNames works__description'
        >
          Description
        </Link>
      </div>
    </article>
  );
};
export default jobCard;
