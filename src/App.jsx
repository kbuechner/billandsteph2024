import { Box, Tabs, Tab, TabList, TabPanels, TabPanel } from '@chakra-ui/react';
import './App.css';
import Schedule from './Content/Schedule';
import Hotels from './Content/Hotels';
import DressCode from './Content/DressCode';
import Faq from './Content/Faq';
import Registry from './Content/Registry';
import LocationAndParking from './Content/LocationAndParking';
import Rsvp from './Content/Rsvp';
import Story from './Content/Story';

function App() {
  return (
    <Box width={'100%'} height={'100%'} backgroundColor={'teal.700'}>
      <Tabs variant={'enclosed-colored'} isFitted>
        <TabList>
          <Tab value='rsvp'>RSVP</Tab>
          <Tab value='story'>Our Story</Tab>
          <Tab value='location'>Location &amp; Parking</Tab>
          <Tab value='schedule'>Schedule</Tab>
          <Tab value='hotels'>Hotels</Tab>
          <Tab value='dress'>Dress Code</Tab>
          <Tab value='faq'>FAQ</Tab>
          <Tab value='registry'>Registry</Tab>
        </TabList>
        <TabPanels>
          <TabPanel><Rsvp/></TabPanel>
          <TabPanel><Story/></TabPanel>
          <TabPanel><LocationAndParking/></TabPanel>
          <TabPanel><Schedule/></TabPanel>
          <TabPanel><Hotels/></TabPanel>
          <TabPanel><DressCode/></TabPanel>
          <TabPanel><Faq/></TabPanel>
          <TabPanel><Registry/></TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}

export default App;
