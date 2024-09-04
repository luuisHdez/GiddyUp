import React from 'react';
import Header from './Body/Header';
import MainContent from './Body/MainContent';
import ActionButtons from './Body/ActionButtons';
import CenteredImage from './Body/CenteredImage';
import MissionVisionComponent from './Body/MissionVisionComponent';
import Button from './Body/Button';
import GoalsSection from './Body/GoalsSection';
import FeedbackSection from './Body/FeedbackSection';
import GreetPlanning from './Body/GreetPlanning';
import ProjectPlanning from './Body/ProjectPlanning';
import CombinedSupportCard from './Body/CombinedSupportCard';
import CombinedThankYouPage from './Body/CombinedThankYouPage';
import CombinedContactSection from './Body/CombinedContactSection';
import CombinedFooter from './Body/CombinedFooter';

function GiddyUpApp() {
  return (
    <div>
      <div className="flex  flex-col items-center px-20 pt-10 mb-4 w-full max-w-[2028px] min-h-[1010px] max-md:px-5 max-md:pb-24 max-md:max-w-full">
  <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/2aae6b7b24cfce92ff03cfe6f5a51e78ae8c99bb684510e5d77b1a488b9cf33f?apiKey=c1946530cef5422ab7dda9568063bfde&&apiKey=c1946530cef5422ab7dda9568063bfde" alt="" className="object-cover absolute inset-0 size-full" />
  <Header />
  <MainContent />
  <ActionButtons />
  <div className="flex relative z-10 flex-col mt-20 gap-2.5 justify-center items-center self-center py-72 mt-0 ml-0 max-w-[1109px] min-h-[726px] px-[607px] rounded-[30px] max-md:px-5 max-md:py-24 max-md:mt-0 w-full">
    <CenteredImage
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/8ba1dfcc2b7e666fbb58dc84bae4e016df1c2e59c2f7f244cc7a7a4974d7b1ea?apiKey=c1946530cef5422ab7dda9568063bfde&&apiKey=c1946530cef5422ab7dda9568063bfde"
      overlay={true}
    />
  </div >
    <MissionVisionComponent />
    <Button />
    <GoalsSection />
    <FeedbackSection />
    <GreetPlanning />
    <ProjectPlanning />
    <CombinedSupportCard />
    <CombinedThankYouPage />
    <CombinedContactSection />
    
</div>
<CombinedFooter />
    </div>
    
    
  );
}

export default GiddyUpApp;