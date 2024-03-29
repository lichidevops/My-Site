import React from 'react';
import Layout from '../components/layout/Layout';
import './Portfolio.css';

import ExpandingCards from './portfolio/ExpandingCards';
import BlurryLoading from './portfolio/BlurryLoading';
import RotatingNavigation from './portfolio/RotatingNavigation';
import HiddenSearch from './portfolio/HiddenSearch';
import ProgressSteps from './portfolio/ProgressSteps';
import QuizApp from './portfolio/QuizApp';
import SplitLandingPage from './portfolio/SplitLandingPage';
import ScrollAnimation from './portfolio/ScrollAnimation';
import AnimatedNavigation from './portfolio/AnimatedNavigation';
import BackgroundBoxes from './portfolio/BackgroundBoxes';
import MovieApp from './portfolio/MovieApp';
import TodoList from './portfolio/TodoList';
import SoundBoard from './portfolio/SoundBoard';
import FormWave from './portfolio/FormWave';
import IncrementCounter from './portfolio/IncrementCounter';
import InsectCatch from './portfolio/InsectCatch';
import KineticLoader from './portfolio/KineticLoader';
import LiveUserFilter from './portfolio/LiveUserFilter';
import NetflixNav from './portfolio/NetflixNav';
import RandomImage from './portfolio/RandomImage';
import RangeSlider from './portfolio/RangeSlider';
import RandomChoice from './portfolio/RandomChoice';
import TestimonialBox from './portfolio/TestimonialBox';
import ThemeClock from './portfolio/ThemeClock';
import PasswordStrength from './portfolio/PasswordStrength';
import FAQ from './portfolio/FAQ';
import FeedbackUI from './portfolio/FeedbackUI';
import DrinkWater from './portfolio/DrinkWater';
import DragDrop from './portfolio/DragDrop';
import Drawing from './portfolio/Drawing';
import DadJokes from './portfolio/DadJokes';
import EventKeyCode from './portfolio/EventKeyCode';
import ModalLayout from './portfolio/ModalLayout/ModalLayout';
import ContentPlaceholder from './portfolio/ContentPlaceholder'
import StickyNavbar from './portfolio/StickyNavbar';
import VerifyAccountUI from './portfolio/VerifyAccountUI';
import ButtonRipple from './portfolio/ButtonRipple';
import BackgroundSlider from './portfolio/BackgroundSlider';
export default function () {
  return (
    <>
    <Layout>
      <div id='portfolio-page'>
      <h2 id='portfolio-title'>Frontend Work </h2>

        <div id='portfolio-body'>
            <BlurryLoading />
            <ExpandingCards />
            <RotatingNavigation />
            <HiddenSearch />
            <ButtonRipple />
            <ProgressSteps />
            <AnimatedNavigation />
            <SplitLandingPage />
            <QuizApp />
            <IncrementCounter />
            <BackgroundSlider />
            <FAQ />

            {/* <ScrollAnimation />
            <BackgroundBoxes />
            <MovieApp />
            <TodoList />
            <SoundBoard />
            <FormWave />
            
            <InsectCatch />
            <KineticLoader />
            <LiveUserFilter />
            <NetflixNav />
            <RandomImage />
            <RangeSlider />
            <RandomChoice />
            <TestimonialBox />
            <ThemeClock />
            <PasswordStrength />
            <FeedbackUI />
            <DrinkWater />
            <DragDrop />
            <Drawing />
            <DadJokes />
            <EventKeyCode />
            <ContentPlaceholder />
            <StickyNavbar />
            <VerifyAccountUI /> */}
        </div>
      </div>
    </Layout>
    </>
  )
}
