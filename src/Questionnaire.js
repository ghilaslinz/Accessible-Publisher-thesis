import React, { useState } from 'react'

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { db } from "./firebase";
import { Helmet } from 'react-helmet'
import { useAuth } from "./contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import { useStateValue } from "./StateProvider";
import { Button } from '@material-ui/core';
import { FormatListNumberedRtlSharp, SignalCellularConnectedNoInternet2Bar } from '@material-ui/icons';
import NavBarNew from './components/NavBarNew';
//import './Questionnaire.css'
function Questionnaire() {
  const TITLE = 'Accessible Publisher : Feedback'
  const { currentUser } = useAuth();
  const [StronglyAgree, setStronglyAgree] = useState('');
  const [First, setFirst] = useState('');
  const [Second, setSecond] = useState('');
  const [Third, setThird] = useState('');
  const [Fourth, setFourth] = useState('');
  const [Five, setFive] = useState('');


  const [First2, setFirst2] = useState('');
  const [Second2, setSecond2] = useState('');
  const [Third2, setThird2] = useState('');
  const [Fourth2, setFourth2] = useState('');

  const [First3, setFirst3] = useState('');
  const [Second3, setSecond3] = useState('');
  const [Third3, setThird3] = useState('');

  const [First4, setFirst4] = useState('');
  const [Second4, setSecond4] = useState('');
  const [Third4, setThird4] = useState('');
  const [Fourth4, setFourth4] = useState('');
  const [Five4, setFive4] = useState('');
  const [Six4, setSix4] = useState('');

  const [First5, setFirst5] = useState('');
  const [Second5, setSecond5] = useState('');


  const [First6, setFirst6] = useState('');
  const [Second6, setSecond6] = useState('');
  const [Third6, setThird6] = useState('');
  const [Fourth6, setFourth6] = useState('');
  const [Five6, setFive6] = useState('');


  const [First7, setFirst7] = useState('');
  const [Second7, setSecond7] = useState('');
  const [Third7, setThird7] = useState('');
  

  const [First8, setFirst8] = useState('');
  const [Second8, setSecond8] = useState('');
  const [Third8, setThird8] = useState('');
  const [Fourth8, setFourth8] = useState('');


  const [First9, setFirst9] = useState('');
  const [Second9, setSecond9] = useState('');
  const [Third9, setThird9] = useState('');


  const [First10, setFirst10] = useState('');
  const [Second10, setSecond10] = useState('');
  const [Third10, setThird10] = useState('');
  const [Fourth10, setFourth10] = useState('');
  const [Five10, setFive10] = useState('');

  const [value, setValue] = React.useState('');



  const handleChange = (event) => {
    setValue(event.target.value);
    console.log(event.target.value);
  };

  const handleFirst = (event) => {
    setFirst(event.target.value);
    console.log(event.target.value);
  };

  const handleFirst2 = (event) => {
    setFirst2(event.target.value);
    console.log(event.target.value);
  };

  const handleFirst3 = (event) => {
    setFirst3(event.target.value);
    console.log(event.target.value);
  };

  const handleFirst4 = (event) => {
    setFirst4(event.target.value);
    console.log(event.target.value);
  };


  const handleFirst5 = (event) => {
    setFirst5(event.target.value);
    console.log(event.target.value);
  };

  const handleFirst6 = (event) => {
    setFirst6(event.target.value);
    console.log(event.target.value);
  };

  const handleFirst7 = (event) => {
    setFirst7(event.target.value);
    console.log(event.target.value);
  };

  const handleFirst8 = (event) => {
    setFirst8(event.target.value);
    console.log(event.target.value);
  };

  const handleFirst9 = (event) => {
    setFirst9(event.target.value);
    console.log(event.target.value);
  };

  const handleFirst10 = (event) => {
    setFirst10(event.target.value);
    console.log(event.target.value);
  };





  const handleSecond = (event) => {
    setSecond(event.target.value);
    console.log(event.target.value);
  };

  const handleSecond2 = (event) => {
    setSecond2(event.target.value);
    console.log(event.target.value);
  };

  const handleSecond3 = (event) => {
    setSecond3(event.target.value);
    console.log(event.target.value);
  };
  const handleSecond4 = (event) => {
    setSecond4(event.target.value);
    console.log(event.target.value);
  };
  const handleSecond5 = (event) => {
    setSecond5(event.target.value);
    console.log(event.target.value);
  };
  const handleSecond6 = (event) => {
    setSecond6(event.target.value);
    console.log(event.target.value);
  };

  const handleSecond7 = (event) => {
    setSecond7(event.target.value);
    console.log(event.target.value);
  };

  const handleSecond8 = (event) => {
    setSecond8(event.target.value);
    console.log(event.target.value);
  };

  const handleSecond9 = (event) => {
    setSecond9(event.target.value);
    console.log(event.target.value);
  };

  const handleSecond10 = (event) => {
    setSecond10(event.target.value);
    console.log(event.target.value);
  };



  

  const handleThird = (event) => {
    setThird(event.target.value);
    console.log(event.target.value);
  };


  const handleThird2 = (event) => {
    setThird2(event.target.value);
    console.log(event.target.value);
  };

  const handleThird3 = (event) => {
    setThird3(event.target.value);
    console.log(event.target.value);
  };
  const handleThird4 = (event) => {
    setThird4(event.target.value);
    console.log(event.target.value);
  };

  const handleThird6 = (event) => {
    setThird6(event.target.value);
    console.log(event.target.value);
  };

  const handleThird8 = (event) => {
    setThird8(event.target.value);
    console.log(event.target.value);
  };
  const handleThird7 = (event) => {
    setThird7(event.target.value);
    console.log(event.target.value);
  };


  

  const handleThird9 = (event) => {
    setThird9(event.target.value);
    console.log(event.target.value);
  };
  const handleThird10 = (event) => {
    setThird10(event.target.value);
    console.log(event.target.value);
  };





  const handleFourth = (event) => {
    setFourth(event.target.value);
    console.log(event.target.value);
  };


  const handleFourth2 = (event) => {
    setFourth2(event.target.value);
    console.log(event.target.value);
  };

  const handleFourth4 = (event) => {
    setFourth4(event.target.value);
    console.log(event.target.value);
  };

  const handleFourth6 = (event) => {
    setFourth6(event.target.value);
    console.log(event.target.value);
  };

  const handleFourth8 = (event) => {
    setFourth8(event.target.value);
    console.log(event.target.value);
  };


  const handleFourth10 = (event) => {
    setFourth10(event.target.value);
    console.log(event.target.value);
  };



  const handleFive = (event) => {
    setFive(event.target.value);
    console.log(event.target.value);
  };

  const handleFive4 = (event) => {
    setFive4(event.target.value);
    console.log(event.target.value);
  };

  const  handleFive6 = (event) => {
    setFive6(event.target.value);
    console.log(event.target.value);
  };

 
  const handleFive10 = (event) => {
    setFive10(event.target.value);
    console.log(event.target.value);
  };

  const handleSix4 = (event) => {
    setSix4(event.target.value);
    console.log(event.target.value);
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    // setLoader(true);

    db.collection('users')
      .doc(currentUser?.uid)
      .collection('questionnaire')
      .doc()
      .set({

        The_application_includes_a_visible_title_page_section_or_site: First,
        The_user_always_knows_where_it_is_located: Second,
        The_user_always_knows_what_the_system_or_application_is_doing: Third,
        The_links_clearly_defined: Fourth,
        All_actions_be_visualized_directly: Five,


        The_information_appears_in_a_logical_order_for_the_user: First2,
        The_design_of_the_icons_corresponds_to_everyday_objects: Second2,
        Every_icon_does_the_action_that_is_expected: Third2,
        The_system_uses_phrases_and_concepts_familiar_to_the_user: Fourth2,

        There_is_a_link_to_come_back_to_initial_state_or_homepage: First3,
        The_functions_undo_and_redo_are_implemented: Second3,
        It_is_easy_to_come_back_to_an_earlier_state_of_the_application: Third3,


        Link_labels_have_the_same_names_as_their_destinations: First4,
        The_same_actions_always_have_the_same_results: Second4,
        The_icons_have_the_same_meaning_everywhere: Third4,
        The_information_displayed_consistently_on_every_page: Fourth4,
        The_colors_of_the_links_follow_standards: Five4,
        Navigation_elements_follow_the_standards: Six4,

        a_confirmation_message_appears_before_taking_the_action: First5,
        it_is_clear_what_information_needs_to_be_entered_in_each_box_on_a_form: Second5,

        It_is_easy_to_use_the_system_for_the_first_time: First6,
        It_is_easy_to_locate_information_that_has_already_been_searched_for_before: Second6,
        You_can_use_the_system_at_all_times_without_remembering_previous_screens: Third6,
        The_information_is_organized_according_to_logic_familiar_to_the_end_user: Fourth6,
        Is_all_the_content_necessary_for_navigation_or_the_task_on_the_screen : Five6,


        There_are_keyboard_shortcuts_for_common_actions: First7,
        The_design_adapts_to_the_changes_of_screen_resolution: Second7,
        it_is_possible_to_easily_perform_an_action_that_was_done_before : Third7,


        the_design_without_information_is_redundancy_used : Fourth8,
        Information_is_short_concise_and_accurate: First8,
        The_text_is_well_organized_with_short_sentences_and_quick_to_interpret: Second8,
        Each_item_of_information_is_different_from_the_rest_and_not_confusing: Third8,

        The_system_displays_a_message_before_taking_irreversible_actions: First9,
        Errors_are_shown_in_real_time: Second9,
        The_error_and_the_error_message_that_appears_is_easy_to_see_find_and_easily_interpretable: Third9,


        There_is_a_help_option: First10,
        If_so_it_is_visible_and_easy_to_access: Second10,
        The_help_section_is_aimed_at_solving_problems: Third10,
        There_is_a_section_on_frequently_asked_questions_FAQ: Fourth10,
      //  The_help_documentation_is_clear_with_examples: Five10
      })

      .then(() => {


        alert("Your informations has been submitted👍");


        // history.push("/dashboard");

      })
      .catch((error) => {
        alert(error.message);

        //    setLoader(false);
      });




  };


  return (
    <div>
      
      <div>
      <Helmet>
          <title>{ TITLE }</title>
        </Helmet>
		<ul class="skip-links">

<li><a href="#maincontent">Skip to the main content</a></li>
</ul>
		<div className="">
		
		 <NavBarNew />
		</div>
    <main id="maincontent">
        <h2 >HEURISTIC EVALUATION QUESTIONNAIRE</h2>
        <div class="flex-container">
          {/*
        <p>Statement</p> 

        <p>Strongly Agree</p>
        <p>Agree</p>
        <p>Neutral</p>
        <p>Disagree</p>
        <p>Strongly Disagree</p>
        */}
          <FormControl component="fieldset">
            <div>
            <FormLabel component="legend" > 1) Visibility of System Status </FormLabel>
              <FormLabel id="The_application_includes_a_visible_title_page_section_or_site" focused="true" class="FormLabel" row component="legend">The application includes a visible title page, section or site </FormLabel>
              <RadioGroup   class="FormControl" onChange={handleFirst} row defaultValue="top">

                <FormControlLabel

                  value="StronglyAgree"
             //   inputProps={{ 'aria-label': 'Strongly Agree' }} 
                  control={<Radio color="primary"  tabindex="0"
                  />}

                  label="Strongly Agree"
                  labelPlacement="top"

                 // tabindex="0"

                />
                <FormControlLabel
                  value="Agree"
              //    inputProps={{ 'aria-label': 'Agree' }}
                  control={<Radio color="primary"
                    tabIndex="-1"
                  />}
                  label="Agree"
                  labelPlacement="top"


                />
                <FormControlLabel
                  value="Neutral"
              //    inputProps={{ 'aria-label': 'Neutral' }}

                  control={<Radio color="primary" tabIndex="-1"
                    aria-checked="false" />}
                  label="Neutral"
                  labelPlacement="top"
                />
                <FormControlLabel

                  value="Disagree"
                  //   inputProps={{ 'aria-label': 'Disagree' }}
                  control={<Radio color="primary" tabIndex="-1"
                  //  aria-checked="false"
                  />}
                  label="Disagree"
                  labelPlacement="top" />

                <FormControlLabel
                  value="Strongly Disagree"
               //      inputProps={{ 'aria-label': 'Strongly Disagree' }}
                  control={<Radio color="primary" tabIndex="-1"
                  //  aria-checked="false"
                  />}
                  label="Strongly Disagree"
                  labelPlacement="top" />
              </RadioGroup>


              <RadioGroup class="FormControl" onChange={handleSecond} row defaultValue="top">
                <FormLabel id="The_user_always_knows_where_it_is_located" class="FormLabel" row component="legend">The user always knows where it is located </FormLabel>
                <FormControlLabel

                  value="Strongly Agree
          "
                  control={<Radio color="primary" tabindex="0" />}

                  label="Strongly Agree"
                  labelPlacement="top"
                />
                <FormControlLabel
                  value="Agree"
                  control={<Radio color="primary" tabindex="-1" />}
                  label="Agree"
                  labelPlacement="top"
                />
                <FormControlLabel
                  value="Neutral"
                  control={<Radio color="primary" tabindex="-1" />}
                  label="Neutral"
                  labelPlacement="top"
                />
                <FormControlLabel
                  value="Disagree"
                  control={<Radio color="primary" tabindex="-1" />}
                  label="Disagree"
                  labelPlacement="top" />

                <FormControlLabel
                  value="Strongly Disagree"
                  control={<Radio color="primary" tabindex="-1" />}
                  label="Strongly Disagree"
                  labelPlacement="top" />
              </RadioGroup>


              <RadioGroup class="FormControl" onChange={handleThird} row
 name="The user always knows what the system or
application is doing" defaultValue="top">
                <FormLabel id="The user always knows what the system or
application is doing" class="FormLabel" row component="legend">The user always knows what the system or
                  application is doing </FormLabel>
                <FormControlLabel

                  value="Strongly Agree"
                //     inputProps={{ 'aria-label': 'Strongly Agree' }}
                  control={<Radio color="primary" tabindex="0" />}
                  label="Strongly Agree"
                  labelPlacement="top"
                />
                <FormControlLabel
                  value="Agree"
                 //    inputProps={{ 'aria-label': 'Agree' }}
                  control={<Radio color="primary" tabindex="-1" />}
                  label="Agree"
                  labelPlacement="top"
                />
                <FormControlLabel
                  value="Neutral"
                   //  inputProps={{ 'aria-label': 'Neutral' }}
                  control={<Radio color="primary" tabindex="-1" />}
                  label="Neutral"
                  labelPlacement="top"
                />
                <FormControlLabel
                  value="Disagree"
                 //    inputProps={{ 'aria-label': 'Disagree' }}
                  control={<Radio color="primary" tabindex="-1" />}
                  label="Disagree"
                  labelPlacement="top" />

                <FormControlLabel
                  value="Strongly Disagree"
                 //    inputProps={{ 'aria-label': 'Strongly Disagree' }}
                  control={<Radio color="primary" tabindex="-1" />}
                  label="Strongly Disagree"
                  labelPlacement="top" />
              </RadioGroup>


              <RadioGroup class="FormControl" onChange={handleFourth} row  defaultValue="top">
                <FormLabel id="The links clearly defined" class="FormLabel" row component="legend">The links clearly defined. </FormLabel>
                <FormControlLabel

                  value="Strongly Agree"
                 //    inputProps={{ 'aria-label': 'Strongly Agree' }}
                  control={<Radio color="primary" tabindex="0" />}
                  label="Strongly Agree"
                  labelPlacement="top"
                />
                <FormControlLabel
                  value="Agree"
                 //    inputProps={{ 'aria-label': 'Agree' }}
                  control={<Radio color="primary" tabindex="-1" />}
                  label="Agree"
                  labelPlacement="top"
                />
                <FormControlLabel
                  value="Neutral"
                //     inputProps={{ 'aria-label': 'Neutral' }}
                  control={<Radio color="primary" tabindex="-1" />}
                  label="Neutral"
                  labelPlacement="top"
                />
                <FormControlLabel
                  value="Disagree"
                //     inputProps={{ 'aria-label': 'Disagree' }}
                  control={<Radio color="primary" tabindex="-1" />}
                  label="Disagree"
                  labelPlacement="top" />

                <FormControlLabel
                  value="Strongly Disagree"
                  //   inputProps={{ 'aria-label': 'Strongly Disagree' }}
                  control={<Radio color="primary" tabindex="-1" />}
                  label="Strongly Disagree"
                  labelPlacement="top" />
              </RadioGroup>


              <RadioGroup class="FormControl" onChange={handleFive} rows name="All actions be visualized directly?" defaultValue="top">
                <FormLabel id="All actions be visualized directly?" class="FormLabel" row component="legend">All actions be visualized directly? </FormLabel>
                <FormControlLabel

                  value="Strongly Agree"
                  //   inputProps={{ 'aria-label': 'Strongly Agree' }}
                  control={<Radio color="primary" tabindex="0" />}
                  label="Strongly Agree"
                  labelPlacement="top"
                />
                <FormControlLabel
                  value="Agree"
                 //    inputProps={{ 'aria-label': 'Agree' }}
                  control={<Radio color="primary" tabindex="-1" />}
                  label="Agree"
                  labelPlacement="top"
                />
                <FormControlLabel
                  value="Neutral"
               //      inputProps={{ 'aria-label': 'Neutral' }}
                  control={<Radio color="primary" tabindex="-1" />}
                  label="Neutral"
                  labelPlacement="top"
                />
                <FormControlLabel
                  value="Disagree"
                  //   inputProps={{ 'aria-label': 'Disagree' }}
                  control={<Radio color="primary" tabindex="-1" />}
                  label="Disagree"
                  labelPlacement="top" />

                <FormControlLabel
                  value="Strongly Disagree"
              //       inputProps={{ 'aria-label': 'Strongly Disagree' }}
                  control={<Radio color="primary" tabindex="-1" />}
                  label="Strongly Disagree"
                  labelPlacement="top" />
              </RadioGroup>

            </div>



            <div>




            <FormLabel component="legend" > 2) Match between system and real world </FormLabel>
      

              <RadioGroup class="FormControl" onChange={handleFirst2} handleThird row name="The information appears in a logical order for the
user " defaultValue="top">
                <FormLabel id="The information appears in a logical order for the
user " class="FormLabel" row component="legend">The information appears in a logical order for the
                  user </FormLabel>
                <FormControlLabel

                  value="Strongly Agree"
                 //    inputProps={{ 'aria-label': 'Strongly Agree' }}
                  control={<Radio color="primary" tabindex="0" />}
                  label="Strongly Agree"
                  labelPlacement="top"
                />
                <FormControlLabel
                  value="Agree"
                //     inputProps={{ 'aria-label': 'Agree' }}
                  control={<Radio color="primary" tabindex="-1" />}
                  label="Agree"
                  labelPlacement="top"
                />
                <FormControlLabel
                  value="Neutral"
                  //   inputProps={{ 'aria-label': 'Neutral' }}
                  control={<Radio color="primary" tabindex="-1" />}
                  label="Neutral"
                  labelPlacement="top"
                />
                <FormControlLabel
                  value="Disagree"
                 //    inputProps={{ 'aria-label': 'Disagree' }}
                  control={<Radio color="primary" tabindex="-1" />}
                  label="Disagree"
                  labelPlacement="top" />

                <FormControlLabel
                  value="Strongly Disagree"
                //     inputProps={{ 'aria-label': 'Strongly Disagree' }}
                  control={<Radio color="primary" tabindex="-1" />}
                  label="Strongly Disagree"
                  labelPlacement="top" />
              </RadioGroup>


              <RadioGroup class="FormControl" onChange={handleSecond2} row   defaultValue="top">
                <FormLabel id="The design of the icons corresponds to everyday
objects" class="FormLabel" row component="legend">The design of the icons corresponds to everyday
                  objects</FormLabel>
                <FormControlLabel

                  value="Strongly Agree"
                  //   inputProps={{ 'aria-label': 'Strongly Agree' }}
                  control={<Radio color="primary" tabindex="0" />}
                  label="Strongly Agree"
                  labelPlacement="top"
                />
                <FormControlLabel
                  value="Agree"
                //     inputProps={{ 'aria-label': 'Agree' }}
                  control={<Radio color="primary" tabindex="-1" />}
                  label="Agree"
                  labelPlacement="top"
                />
                <FormControlLabel
                  value="Neutral"
                 //    inputProps={{ 'aria-label': 'Neutral' }}
                  control={<Radio color="primary" tabindex="-1" />}
                  label="Neutral"
                  labelPlacement="top"
                />
                <FormControlLabel
                  value="Disagree"
                 //    inputProps={{ 'aria-label': 'Disagree' }}
                  control={<Radio color="primary" tabindex="-1" />}
                  label="Disagree"
                  labelPlacement="top" />

                <FormControlLabel
                  value="Strongly Disagree"
               //      inputProps={{ 'aria-label': 'Strongly Disagree' }}
                  control={<Radio color="primary" tabindex="-1" />}
                  label="Strongly Disagree"
                  labelPlacement="top" />
              </RadioGroup>


              <RadioGroup class="FormControl" onChange={handleThird2} row  defaultValue="top">
                <FormLabel id="Every icon does the action that is expected" class="FormLabel" row component="legend">Every icon does the action that is expected</FormLabel>
                <FormControlLabel

                  value="Strongly Agree"
                 //    inputProps={{ 'aria-label': 'Strongly Agree' }}
                  control={<Radio color="primary" tabindex="0" />}
                  label="Strongly Agree"
                  labelPlacement="top"
                />
                <FormControlLabel
                  value="Agree"
                  //   inputProps={{ 'aria-label': 'Agree' }}
                  control={<Radio color="primary" tabindex="-1" />}
                  label="Agree"
                  labelPlacement="top"
                />
                <FormControlLabel
                  value="Neutral"
                 //    inputProps={{ 'aria-label': 'Neutral' }}
                  control={<Radio color="primary" tabindex="-1" />}
                  label="Neutral"
                  labelPlacement="top"
                />
                <FormControlLabel
                  value="Disagree"
                //     inputProps={{ 'aria-label': 'Disagree' }}
                  control={<Radio color="primary" tabindex="-1" />}
                  label="Disagree"
                  labelPlacement="top" />

                <FormControlLabel
                  value="Strongly Disagree"
                //     inputProps={{ 'aria-label': 'Strongly Disagree' }}
                  control={<Radio color="primary" tabindex="-1" />}
                  label="Strongly Disagree"
                  labelPlacement="top" />
              </RadioGroup>


              <RadioGroup class="FormControl" onChange={handleFourth2} row   defaultValue="top">
                <FormLabel class="FormLabel" id="The system uses phrases and concepts familiar to
the user"  row component="legend">The system uses phrases and concepts familiar to
                  the user </FormLabel>
                <FormControlLabel

                  value="Strongly Agree
          "
                  //   inputProps={{ 'aria-label': 'Strongly Agree' }}
                  control={<Radio color="primary" tabindex="0" />}
                  label="Strongly Agree"
                  labelPlacement="top"
                />
                <FormControlLabel
                  value="Agree"
             //        inputProps={{ 'aria-label': 'Agree' }}
                  control={<Radio color="primary" tabindex="-1" />}
                  label="Agree"
                  labelPlacement="top"
                />
                <FormControlLabel
                  value="Neutral"
                //     inputProps={{ 'aria-label': 'Neutral' }}
                  control={<Radio color="primary" tabindex="-1" />}
                  label="Neutral"
                  labelPlacement="top"
                />
                <FormControlLabel
                  value="Disagree"
                //     inputProps={{ 'aria-label': 'Disagree' }}
                  control={<Radio color="primary" tabindex="-1" />}
                  label="Disagree"
                  labelPlacement="top" />

                <FormControlLabel
                  value="Strongly Disagree"
              //       inputProps={{ 'aria-label': 'Strongly Disagree' }}
                  control={<Radio color="primary" tabindex="-1" />}
                  label="Strongly Disagree"
                  labelPlacement="top" />
              </RadioGroup>



            </div>

            ---------------------




            <div>



            <FormLabel component="legend" > 3) User Control and freedom </FormLabel>

             

              <RadioGroup class="FormControl" onChange={handleFirst3} row name="position" defaultValue="top">
                <FormLabel class="FormLabel" id="There is a link to come back to initial state or
homepage" row component="legend">There is a link to come back to initial state or
                  homepage </FormLabel>
                <FormControlLabel

                  value="Strongly Agree
          "
                  control={<Radio color="primary" tabindex="0" />}
                  label="Strongly Agree"
                  labelPlacement="top"
                />
                <FormControlLabel
                  value="Agree"
                  control={<Radio color="primary" tabindex="-1" />}
                  label="Agree"
                  labelPlacement="top"
                />
                <FormControlLabel
                  value="Neutral"
                  control={<Radio color="primary" tabindex="-1" />}
                  label="Neutral"
                  labelPlacement="top"
                />
                <FormControlLabel
                  value="Disagree"
                  control={<Radio color="primary" tabindex="-1" />}
                  label="Disagree"
                  labelPlacement="top" />

                <FormControlLabel
                  value="Strongly Disagree"
                  control={<Radio color="primary" tabindex="-1" />}
                  label="Strongly Disagree"
                  labelPlacement="top" />
              </RadioGroup>


              <RadioGroup class="FormControl" onChange={handleSecond3} row  name="position" defaultValue="top">
                <FormLabel class="FormLabel" id="The functions undo and redo are implemented" row component="legend">The functions “undo” and “re-do” are implemented</FormLabel>
                <FormControlLabel

                  value="Strongly Agree
          "
                  control={<Radio color="primary" tabindex="0" />}
                  label="Strongly Agree"
                  labelPlacement="top"
                />
                <FormControlLabel
                  value="Agree"
                  control={<Radio color="primary" tabindex="-1" />}
                  label="Agree"
                  labelPlacement="top"
                />
                <FormControlLabel
                  value="Neutral"
                  control={<Radio color="primary" tabindex="-1" />}
                  label="Neutral"
                  labelPlacement="top"
                />
                <FormControlLabel
                  value="Disagree"
                  control={<Radio color="primary" tabindex="-1" />}
                  label="Disagree"
                  labelPlacement="top" />

                <FormControlLabel
                  value="Strongly Disagree"
                  control={<Radio color="primary" tabindex="-1" />}
                  label="Strongly Disagree"
                  labelPlacement="top" />
              </RadioGroup>


              <RadioGroup class="FormControl" onChange={handleThird3} row  defaultValue="top">
                <FormLabel class="FormLabel" id="It is easy to come back to an earlier state of the
application?" row component="legend">It is easy to come back to an earlier state of the
                  application?</FormLabel>
                <FormControlLabel

                  value="Strongly Agree
          "
                  control={<Radio color="primary" tabindex="0" />}
                  label="Strongly Agree"
                  labelPlacement="top"
                />
                <FormControlLabel
                  value="Agree"
                  control={<Radio color="primary" tabindex="-1" />}
                  label="Agree"
                  labelPlacement="top"
                />
                <FormControlLabel
                  value="Neutral"
                  control={<Radio color="primary" tabindex="-1" />}
                  label="Neutral"
                  labelPlacement="top"
                />
                <FormControlLabel
                  value="Disagree"
                  control={<Radio color="primary" tabindex="-1" />}
                  label="Disagree"
                  labelPlacement="top" />

                <FormControlLabel
                  value="Strongly Disagree"
                  control={<Radio color="primary" tabindex="-1" />}
                  label="Strongly Disagree"
                  labelPlacement="top" />
              </RadioGroup>





            </div>

            ------------------



            <div>




            <FormLabel component="legend" > 4) Consistency and standards </FormLabel>
           
              <RadioGroup class="FormControl" onChange={handleFirst4} row defaultValue="top">
                <FormLabel class="FormLabel" id="Link labels have the same names as their
destinations" row component="legend">Link labels have the same names as their
                  destinations </FormLabel>
                <FormControlLabel

                  value="Strongly Agree
          "
                  control={<Radio color="primary" tabindex="0" />}
                  label="Strongly Agree"
                  labelPlacement="top"
                />
                <FormControlLabel
                  value="Agree"
                  control={<Radio color="primary" tabindex="-1" />}
                  label="Agree"
                  labelPlacement="top"
                />
                <FormControlLabel
                  value="Neutral"
                  control={<Radio color="primary" tabindex="-1" />}
                  label="Neutral"
                  labelPlacement="top"
                />
                <FormControlLabel
                  value="Disagree"
                  control={<Radio color="primary" tabindex="-1" />}
                  label="Disagree"
                  labelPlacement="top" />

                <FormControlLabel
                  value="Strongly Disagree"
                  control={<Radio color="primary" tabindex="-1" />}
                  label="Strongly Disagree"
                  labelPlacement="top" />
              </RadioGroup>


              <RadioGroup class="FormControl" onChange={handleSecond4} row defaultValue="top">
                <FormLabel id="The same actions always have the same results" class="FormLabel" row component="legend">The same actions always have the same results</FormLabel>
                <FormControlLabel

                  value="Strongly Agree
          "
                  control={<Radio color="primary" tabindex="0" />}
                  label="Strongly Agree"
                  labelPlacement="top"
                />
                <FormControlLabel
                  value="Agree"
                  control={<Radio color="primary" tabindex="-1" />}
                  label="Agree"
                  labelPlacement="top"
                />
                <FormControlLabel
                  value="Neutral"
                  control={<Radio color="primary" tabindex="-1" />}
                  label="Neutral"
                  labelPlacement="top"
                />
                <FormControlLabel
                  value="Disagree"
                  control={<Radio color="primary" tabindex="-1" />}
                  label="Disagree"
                  labelPlacement="top" />

                <FormControlLabel
                  value="Strongly Disagree"
                  control={<Radio color="primary" tabindex="-1" />}
                  label="Strongly Disagree"
                  labelPlacement="top" />
              </RadioGroup>


              <RadioGroup class="FormControl" onChange={handleThird4} row defaultValue="top">
                <FormLabel class="FormLabel" id="The icons have the same meaning everywhere" row component="legend">The icons have the same meaning everywhere</FormLabel>
                <FormControlLabel

                  value="Strongly Agree
          "
                  control={<Radio color="primary" tabindex="-1" />}
                  label="Strongly Agree"
                  labelPlacement="top"
                />
                <FormControlLabel
                  value="Agree"
                  control={<Radio color="primary" tabindex="-1" />}
                  label="Agree"
                  labelPlacement="top"
                />
                <FormControlLabel
                  value="Neutral"
                  control={<Radio color="primary" tabindex="-1" />}
                  label="Neutral"
                  labelPlacement="top"
                />
                <FormControlLabel
                  value="Disagree"
                  control={<Radio color="primary" tabindex="-1" />}
                  label="Disagree"
                  labelPlacement="top" />

                <FormControlLabel
                  value="Strongly Disagree"
                  control={<Radio color="primary" tabindex="-1" />}
                  label="Strongly Disagree"
                  labelPlacement="top" />
              </RadioGroup>


              <RadioGroup class="FormControl" onChange={handleFourth4}  defaultValue="top">
                <FormLabel class="FormLabel" id="The information displayed consistently on every
page" row component="legend">The information displayed consistently on every
                  page</FormLabel>
                <FormControlLabel

                  value="Strongly Agree
          "
                  control={<Radio color="primary" tabindex="0" />}
                  label="Strongly Agree"
                  labelPlacement="top"
                />
                <FormControlLabel
                  value="Agree"
                  control={<Radio color="primary" tabindex="-1" />}
                  label="Agree"
                  labelPlacement="top"
                />
                <FormControlLabel
                  value="Neutral"
                  control={<Radio color="primary" tabindex="-1" />}
                  label="Neutral"
                  labelPlacement="top"
                />
                <FormControlLabel
                  value="Disagree"
                  control={<Radio color="primary" tabindex="-1" />}
                  label="Disagree"
                  labelPlacement="top" />

                <FormControlLabel
                  value="Strongly Disagree"
                  control={<Radio color="primary" tabindex="-1" />}
                  label="Strongly Disagree"
                  labelPlacement="top" />
              </RadioGroup>


              <RadioGroup class="FormControl" onChange={handleFive4} row defaultValue="top">
                <FormLabel class="FormLabel" id="The colors of the links follow standards" row component="legend">The colors of the links follow standards</FormLabel>
                <FormControlLabel

                  value="Strongly Agree
          "
                  control={<Radio color="primary" tabindex="0" />}
                  label="Strongly Agree"
                  labelPlacement="top"
                />
                <FormControlLabel
                  value="Agree"
                  control={<Radio color="primary" tabindex="-1" />}
                  label="Agree"
                  labelPlacement="top"
                />
                <FormControlLabel
                  value="Neutral"
                  control={<Radio color="primary" tabindex="-1" />}
                  label="Neutral"
                  labelPlacement="top"
                />
                <FormControlLabel
                  value="Disagree"
                  control={<Radio color="primary" tabindex="-1" />}
                  label="Disagree"
                  labelPlacement="top" />

                <FormControlLabel
                  value="Strongly Disagree"
                  control={<Radio color="primary" tabindex="-1" />}
                  label="Strongly Disagree"
                  labelPlacement="top" />
              </RadioGroup>


              <RadioGroup class="FormControl" onChange={handleSix4} row   defaultValue="top">
                <FormLabel class="FormLabel" id="Navigation elements follow the standards (Buttons,
check boxes" row component="legend">Navigation elements follow the standards (Buttons,
                  check boxes, ...)</FormLabel>
                <FormControlLabel

                  value="Strongly Agree
          "
                  control={<Radio color="primary" tabindex="0" />}
                  label="Strongly Agree"
                  labelPlacement="top"
                />
                <FormControlLabel
                  value="Agree"
                  control={<Radio color="primary" tabindex="-1" />}
                  label="Agree"
                  labelPlacement="top"
                />
                <FormControlLabel
                  value="Neutral"
                  control={<Radio color="primary" tabindex="-1" />}
                  label="Neutral"
                  labelPlacement="top"
                />
                <FormControlLabel
                  value="Disagree"
                  control={<Radio color="primary" tabindex="-1" />}
                  label="Disagree"
                  labelPlacement="top" />

                <FormControlLabel
                  value="Strongly Disagree"
                  control={<Radio color="primary" tabindex="-1" />}
                  label="Strongly Disagree"
                  labelPlacement="top" />
              </RadioGroup>




            </div>

            -----------------



            <div>





              <FormLabel component="legend" >5) Error prevention </FormLabel>

              <RadioGroup class="FormControl" onChange={handleFirst5} row defaultValue="top">
                <FormLabel id="A confirmation message appears before taking the
action" class="FormLabel" row component="legend">A confirmation message appears before taking the
                  action </FormLabel>
                <FormControlLabel

                  value="Strongly Agree
          "
                  control={<Radio color="primary" tabindex="0" />}
                  label="Strongly Agree"
                  labelPlacement="top"
                />
                <FormControlLabel
                  value="Agree"
                  control={<Radio color="primary" tabindex="-1" />}
                  label="Agree"
                  labelPlacement="top"
                />
                <FormControlLabel
                  value="Neutral"
                  control={<Radio color="primary" tabindex="-1" />}
                  label="Neutral"
                  labelPlacement="top"
                />
                <FormControlLabel
                  value="Disagree"
                  control={<Radio color="primary" tabindex="-1" />}
                  label="Disagree"
                  labelPlacement="top" />

                <FormControlLabel
                  value="Strongly Disagree"
                  control={<Radio color="primary" tabindex="-1" />}
                  label="Strongly Disagree"
                  labelPlacement="top" />
              </RadioGroup>


              <RadioGroup class="FormControl" onChange={handleSecond5} row   defaultValue="top">
                <FormLabel class="FormLabel" id="it is clear what information needs to be entered in
each box on a form?"  row component="legend">it is clear what information needs to be entered in
                  each box on a form?</FormLabel>
                <FormControlLabel

                  value="Strongly Agree
          "
                  control={<Radio color="primary" tabindex="0" />}
                  label="Strongly Agree"
                  labelPlacement="top"
                />
                <FormControlLabel
                  value="Agree"
                  control={<Radio color="primary" tabindex="-1" />}
                  label="Agree"
                  labelPlacement="top"
                />
                <FormControlLabel
                  value="Neutral"
                  control={<Radio color="primary" tabindex="-1" />}
                  label="Neutral"
                  labelPlacement="top"
                />
                <FormControlLabel
                  value="Disagree"
                  control={<Radio color="primary" tabindex="-1" />}
                  label="Disagree"
                  labelPlacement="top" />

                <FormControlLabel
                  value="Strongly Disagree"
                  control={<Radio color="primary" tabindex="-1" />}
                  label="Strongly Disagree"
                  labelPlacement="top" />
              </RadioGroup>





            </div>

            -----------------



            <div>



            <FormLabel component="legend" >6) Recognition rather than recall </FormLabel>

              

              <RadioGroup class="FormControl" onChange={handleFirst6} row defaultValue="top">
                <FormLabel class="FormLabel" id="It is easy to use the system for the first time?" row component="legend">It is easy to use the system for the first time? </FormLabel>
                <FormControlLabel

                  value="Strongly Agree
          "
                  control={<Radio color="primary" tabindex="0" />}
                  label="Strongly Agree"
                  labelPlacement="top"
                />
                <FormControlLabel
                  value="Agree"
                  control={<Radio color="primary" tabindex="-1" />}
                  label="Agree"
                  labelPlacement="top"
                />
                <FormControlLabel
                  value="Neutral"
                  control={<Radio color="primary" tabindex="-1" />}
                  label="Neutral"
                  labelPlacement="top"
                />
                <FormControlLabel
                  value="Disagree"
                  control={<Radio color="primary" tabindex="-1" />}
                  label="Disagree"
                  labelPlacement="top" />

                <FormControlLabel
                  value="Strongly Disagree"
                  control={<Radio color="primary" tabindex="-1" />}
                  label="Strongly Disagree"
                  labelPlacement="top" />
              </RadioGroup>


              <RadioGroup class="FormControl" onChange={handleSecond6} row   defaultValue="top">
                <FormLabel class="FormLabel" id="it is easy to locate information that has already been
searched for before." row component="legend">It is easy to locate information that has already been
                  searched for before.</FormLabel>
                <FormControlLabel

                  value="Strongly Agree
          "
                  control={<Radio color="primary" tabindex="0" />}
                  label="Strongly Agree"
                  labelPlacement="top"
                />
                <FormControlLabel
                  value="Agree"
                  control={<Radio color="primary" tabindex="-1" />}
                  label="Agree"
                  labelPlacement="top"
                />
                <FormControlLabel
                  value="Neutral"
                  control={<Radio color="primary" tabindex="-1" />}
                  label="Neutral"
                  labelPlacement="top"
                />
                <FormControlLabel
                  value="Disagree"
                  control={<Radio color="primary" tabindex="-1" />}
                  label="Disagree"
                  labelPlacement="top" />

                <FormControlLabel
                  value="Strongly Disagree"
                  control={<Radio color="primary" tabindex="-1" />}
                  label="Strongly Disagree"
                  labelPlacement="top" />
              </RadioGroup>



              <RadioGroup class="FormControl" onChange={handleThird6} row  defaultValue="top">
                <FormLabel class="FormLabel" id="You can use the system at all times without
remembering previous screens" row component="legend">You can use the system at all times without
                  remembering previous screens</FormLabel>
                <FormControlLabel

                  value="Strongly Agree
          "
                  control={<Radio color="primary" tabindex="0" />}
                  label="Strongly Agree"
                  labelPlacement="top"
                />
                <FormControlLabel
                  value="Agree"
                  control={<Radio color="primary" tabindex="-1" />}
                  label="Agree"
                  labelPlacement="top"
                />
                <FormControlLabel
                  value="Neutral"
                  control={<Radio color="primary" tabindex="-1" />}
                  label="Neutral"
                  labelPlacement="top"
                />
                <FormControlLabel
                  value="Disagree"
                  control={<Radio color="primary" tabindex="-1" />}
                  label="Disagree"
                  labelPlacement="top" />

                <FormControlLabel
                  value="Strongly Disagree"
                  control={<Radio color="primary" tabindex="-1" />}
                  label="Strongly Disagree"
                  labelPlacement="top" />
              </RadioGroup>


              <RadioGroup class="FormControl" onChange={handleFourth6} row  defaultValue="top">
                <FormLabel class="FormLabel" id="The information is organized according to logic
familiar to the end user?"  row component="legend">The information is organized according to logic
                  familiar to the end user?</FormLabel>
                <FormControlLabel

                  value="Strongly Agree
          "
                  control={<Radio color="primary" tabindex="0" />}
                  label="Strongly Agree"
                  labelPlacement="top"
                />
                <FormControlLabel
                  value="Agree"
                  control={<Radio color="primary" tabindex="-1" />}
                  label="Agree"
                  labelPlacement="top"
                />
                <FormControlLabel
                  value="Neutral"
                  control={<Radio color="primary" tabindex="-1" />}
                  label="Neutral"
                  labelPlacement="top"
                />
                <FormControlLabel
                  value="Disagree"
                  control={<Radio color="primary" tabindex="-1" />}
                  label="Disagree"
                  labelPlacement="top" />

                <FormControlLabel
                  value="Strongly Disagree"
                  control={<Radio color="primary" tabindex="-1" />}
                  label="Strongly Disagree"
                  labelPlacement="top" />
              </RadioGroup>


              <RadioGroup class="FormControl" onChange={handleFive6} row  defaultValue="top">
                <FormLabel class="FormLabel" id="Is all the content necessary for navigation or the task on the screen"  row component="legend">Is all the content necessary for navigation or the task on the screen ?</FormLabel>
                <FormControlLabel

                  value="Strongly Agree
          "
                  control={<Radio color="primary" tabindex="0" />}
                  label="Strongly Agree"
                  labelPlacement="top"
                />
                <FormControlLabel
                  value="Agree"
                  control={<Radio color="primary" tabindex="-1" />}
                  label="Agree"
                  labelPlacement="top"
                />
                <FormControlLabel
                  value="Neutral"
                  control={<Radio color="primary" tabindex="-1" />}
                  label="Neutral"
                  labelPlacement="top"
                />
                <FormControlLabel
                  value="Disagree"
                  control={<Radio color="primary" tabindex="-1" />}
                  label="Disagree"
                  labelPlacement="top" />

                <FormControlLabel
                  value="Strongly Disagree"
                  control={<Radio color="primary" tabindex="-1" />}
                  label="Strongly Disagree"
                  labelPlacement="top" />
              </RadioGroup>


              



            </div>

            -----------------
            <div>




            <FormLabel component="legend" >7) Flexibility and efficiency of use </FormLabel>
        

              <RadioGroup class="FormControl" onChange={handleFirst7} rowdefaultValue="top">
                <FormLabel class="FormLabel" id="There are keyboard shortcuts for common actions" row component="legend">There are keyboard shortcuts for common actions </FormLabel>
                <FormControlLabel

                  value="Strongly Agree
    "
                  control={<Radio color="primary" tabindex="0" />}
                  label="Strongly Agree"
                  labelPlacement="top"
                />
                <FormControlLabel
                  value="Agree"
                  control={<Radio color="primary" tabindex="-1" />}
                  label="Agree"
                  labelPlacement="top"
                />
                <FormControlLabel
                  value="Neutral"
                  control={<Radio color="primary" tabindex="-1" />}
                  label="Neutral"
                  labelPlacement="top"
                />
                <FormControlLabel
                  value="Disagree"
                  control={<Radio color="primary" tabindex="-1" />}
                  label="Disagree"
                  labelPlacement="top" />

                <FormControlLabel
                  value="Strongly Disagree"
                  control={<Radio color="primary" tabindex="-1" />}
                  label="Strongly Disagree"
                  labelPlacement="top" />
              </RadioGroup>


              <RadioGroup class="FormControl" onChange={handleSecond7} row defaultValue="top">
                <FormLabel id="The design adapts to the changes of screen
resolution" class="FormLabel" row component="legend">The design adapts to the changes of screen
                  resolution</FormLabel>
                <FormControlLabel

                  value="Strongly Agree
    "
                  control={<Radio color="primary" tabindex="0" />}
                  label="Strongly Agree"
                  labelPlacement="top"
                />
                <FormControlLabel
                  value="Agree"
                  control={<Radio color="primary" tabindex="-1" />}
                  label="Agree"
                  labelPlacement="top"
                />
                <FormControlLabel
                  value="Neutral"
                  control={<Radio color="primary" tabindex="-1" />}
                  label="Neutral"
                  labelPlacement="top"
                />
                <FormControlLabel
                  value="Disagree"
                  control={<Radio color="primary" tabindex="-1" />}
                  label="Disagree"
                  labelPlacement="top" />

                <FormControlLabel
                  value="Strongly Disagree"
                  control={<Radio color="primary" tabindex="-1" />}
                  label="Strongly Disagree"
                  labelPlacement="top" />
              </RadioGroup>

              <RadioGroup class="FormControl" onChange={handleThird7} row defaultValue="top">
                <FormLabel id="It is possible to easily perform an action that was done before" class="FormLabel" row component="legend">It is possible to easily perform an action that was done before
                  resolution</FormLabel>
                <FormControlLabel

                  value="Strongly Agree
    "
                  control={<Radio color="primary" tabindex="0" />}
                  label="Strongly Agree"
                  labelPlacement="top"
                />
                <FormControlLabel
                  value="Agree"
                  control={<Radio color="primary" tabindex="-1" />}
                  label="Agree"
                  labelPlacement="top"
                />
                <FormControlLabel
                  value="Neutral"
                  control={<Radio color="primary" tabindex="-1" />}
                  label="Neutral"
                  labelPlacement="top"
                />
                <FormControlLabel
                  value="Disagree"
                  control={<Radio color="primary" tabindex="-1" />}
                  label="Disagree"
                  labelPlacement="top" />

                <FormControlLabel
                  value="Strongly Disagree"
                  control={<Radio color="primary" tabindex="-1" />}
                  label="Strongly Disagree"
                  labelPlacement="top" />
              </RadioGroup>



            

            </div>
            --------------
            <div>



            <FormLabel component="legend" >8) Aesthetic and minimalistic design </FormLabel>

            

            <RadioGroup class="FormControl" onChange={handleFourth8} row  defaultValue="top">
                <FormLabel class="FormLabel" id="the design without information is redundancy used " row component="legend">the design without information is redundancy used </FormLabel>
                <FormControlLabel

                  value="Strongly Agree
    "
                  control={<Radio color="primary" tabindex="0" />}
                  label="Strongly Agree"
                  labelPlacement="top"
                />
                <FormControlLabel
                  value="Agree"
                  control={<Radio color="primary" tabindex="-1" />}
                  label="Agree"
                  labelPlacement="top"
                />
                <FormControlLabel
                  value="Neutral"
                  control={<Radio color="primary" tabindex="-1" />}
                  label="Neutral"
                  labelPlacement="top"
                />
                <FormControlLabel
                  value="Disagree"
                  control={<Radio color="primary" tabindex="-1" />}
                  label="Disagree"
                  labelPlacement="top" />

                <FormControlLabel
                  value="Strongly Disagree"
                  control={<Radio color="primary" tabindex="-1" />}
                  label="Strongly Disagree"
                  labelPlacement="top" />
              </RadioGroup>

              <RadioGroup class="FormControl" onChange={handleFirst8} row  defaultValue="top">
                <FormLabel class="FormLabel" id="Information is short concise and accurate" row component="legend">Information is short, concise and accurate </FormLabel>
                <FormControlLabel

                  value="Strongly Agree
    "
                  control={<Radio color="primary" tabindex="0" />}
                  label="Strongly Agree"
                  labelPlacement="top"
                />
                <FormControlLabel
                  value="Agree"
                  control={<Radio color="primary" tabindex="-1" />}
                  label="Agree"
                  labelPlacement="top"
                />
                <FormControlLabel
                  value="Neutral"
                  control={<Radio color="primary" tabindex="-1" />}
                  label="Neutral"
                  labelPlacement="top"
                />
                <FormControlLabel
                  value="Disagree"
                  control={<Radio color="primary" tabindex="-1" />}
                  label="Disagree"
                  labelPlacement="top" />

                <FormControlLabel
                  value="Strongly Disagree"
                  control={<Radio color="primary" tabindex="-1" />}
                  label="Strongly Disagree"
                  labelPlacement="top" />
              </RadioGroup>


              <RadioGroup class="FormControl" onChange={handleSecond8} row  defaultValue="top">
                <FormLabel class="FormLabel" id="The text is well organized, with short sentences and
quick to interpret" row component="legend">The text is well organized, with short sentences and
                  quick to interpret</FormLabel>
                <FormControlLabel

                  value="Strongly Agree
    "
                  control={<Radio color="primary" tabindex="0" />}
                  label="Strongly Agree"
                  labelPlacement="top"
                />
                <FormControlLabel
                  value="Agree"
                  control={<Radio color="primary" tabindex="-1" />}
                  label="Agree"
                  labelPlacement="top"
                />
                <FormControlLabel
                  value="Neutral"
                  control={<Radio color="primary" tabindex="-1" />}
                  label="Neutral"
                  labelPlacement="top"
                />
                <FormControlLabel
                  value="Disagree"
                  control={<Radio color="primary" tabindex="-1" />}
                  label="Disagree"
                  labelPlacement="top" />

                <FormControlLabel
                  value="Strongly Disagree"
                  control={<Radio color="primary" tabindex="-1" />}
                  label="Strongly Disagree"
                  labelPlacement="top" />
              </RadioGroup>



              <RadioGroup class="FormControl" onChange={handleThird8} row   defaultValue="top">
                <FormLabel class="FormLabel" id="Each item of information is different from the rest
and not confusing" row component="legend">Each item of information is different from the rest
                  and not confusing</FormLabel>
                <FormControlLabel

                  value="Strongly Agree
    "
                  control={<Radio color="primary" tabindex="0" />}
                  label="Strongly Agree"
                  labelPlacement="top"
                />
                <FormControlLabel
                  value="Agree"
                  control={<Radio color="primary" tabindex="-1" />}
                  label="Agree"
                  labelPlacement="top"
                />
                <FormControlLabel
                  value="Neutral"
                  control={<Radio color="primary" tabindex="-1" />}
                  label="Neutral"
                  labelPlacement="top"
                />
                <FormControlLabel
                  value="Disagree"
                  control={<Radio color="primary" tabindex="-1" />}
                  label="Disagree"
                  labelPlacement="top" />

                <FormControlLabel
                  value="Strongly Disagree"
                  control={<Radio color="primary" tabindex="-1" />}
                  label="Strongly Disagree"
                  labelPlacement="top" />
              </RadioGroup>



            </div>

            -----------------

            <div>



            <FormLabel component="legend" >9) Help users recognize, diagnose and recover from errors </FormLabel>

            

              <RadioGroup class="FormControl" onChange={handleFirst9} row  defaultValue="top">
                <FormLabel class="FormLabel" id="The system displays a message before taking
irreversible actions" row component="legend">The system displays a message before taking
                  irreversible actions</FormLabel>
                <FormControlLabel

                  value="Strongly Agree
    "
                  control={<Radio color="primary" tabindex="0" />}
                  label="Strongly Agree"
                  labelPlacement="top"
                />
                <FormControlLabel
                  value="Agree"
                  control={<Radio color="primary" tabindex="-1" />}
                  label="Agree"
                  labelPlacement="top"
                />
                <FormControlLabel
                  value="Neutral"
                  control={<Radio color="primary" tabindex="-1" />}
                  label="Neutral"
                  labelPlacement="top"
                />
                <FormControlLabel
                  value="Disagree"
                  control={<Radio color="primary" tabindex="-1" />}
                  label="Disagree"
                  labelPlacement="top" />

                <FormControlLabel
                  value="Strongly Disagree"
                  control={<Radio color="primary" tabindex="-1" />}
                  label="Strongly Disagree"
                  labelPlacement="top" />
              </RadioGroup>


              <RadioGroup class="FormControl" onChange={handleSecond9} row defaultValue="top">
                <FormLabel class="FormLabel" id="Errors are shown in real time" row component="legend">Errors are shown in real time</FormLabel>
                <FormControlLabel

                  value="Strongly Agree
    "
                  control={<Radio color="primary" tabindex="0" />}
                  label="Strongly Agree"
                  labelPlacement="top"
                />
                <FormControlLabel
                  value="Agree"
                  control={<Radio color="primary" tabindex="-1" />}
                  label="Agree"
                  labelPlacement="top"
                />
                <FormControlLabel
                  value="Neutral"
                  control={<Radio color="primary" tabindex="-1" />}
                  label="Neutral"
                  labelPlacement="top"
                />
                <FormControlLabel
                  value="Disagree"
                  control={<Radio color="primary" tabindex="-1" />}
                  label="Disagree"
                  labelPlacement="top" />

                <FormControlLabel
                  value="Strongly Disagree"
                  control={<Radio color="primary" tabindex="-1" />}
                  label="Strongly Disagree"
                  labelPlacement="top" />
              </RadioGroup>



              <RadioGroup class="FormControl" onChange={handleThird9} row   defaultValue="top">
                <FormLabel class="FormLabel" id="The error and the error message that appears is
easy to see/find and easily interpretable" row component="legend">The error and the error message that appears is
                  easy to see/find and easily interpretable</FormLabel>
                <FormControlLabel

                  value="Strongly Agree
    "
                  control={<Radio color="primary" tabindex="0" />}
                  label="Strongly Agree"
                  labelPlacement="top"
                />
                <FormControlLabel
                  value="Agree"
                  control={<Radio color="primary" tabindex="-1" />}
                  label="Agree"
                  labelPlacement="top"
                />
                <FormControlLabel
                  value="Neutral"
                  control={<Radio color="primary" tabindex="-1" />}
                  label="Neutral"
                  labelPlacement="top"
                />
                <FormControlLabel
                  value="Disagree"
                  control={<Radio color="primary" tabindex="-1" />}
                  label="Disagree"
                  labelPlacement="top" />

                <FormControlLabel
                  value="Strongly Disagree"
                  control={<Radio color="primary" tabindex="-1" />}
                  label="Strongly Disagree"
                  labelPlacement="top" />
              </RadioGroup>



            </div>


            -----------------

            <div>



            <FormLabel component="legend" >10) Help and documentation</FormLabel>
          

              <RadioGroup class="FormControl" onChange={handleFirst10} row defaultValue="top">
                <FormLabel class="FormLabel" id="There is a help option" row component="legend">There is a "help" option</FormLabel>
                <FormControlLabel

                  value="Strongly Agree
    "
                  control={<Radio color="primary" tabindex="0" />}
                  label="Strongly Agree"
                  labelPlacement="top"
                />
                <FormControlLabel
                  value="Agree"
                  control={<Radio color="primary" tabindex="-1" />}
                  label="Agree"
                  labelPlacement="top"
                />
                <FormControlLabel
                  value="Neutral"
                  control={<Radio color="primary" tabindex="-1" />}
                  label="Neutral"
                  labelPlacement="top"
                />
                <FormControlLabel
                  value="Disagree"
                  control={<Radio color="primary" tabindex="-1" />}
                  label="Disagree"
                  labelPlacement="top" />

                <FormControlLabel
                  value="Strongly Disagree"
                  control={<Radio color="primary" tabindex="-1" />}
                  label="Strongly Disagree"
                  labelPlacement="top" />
              </RadioGroup>


              <RadioGroup class="FormControl" onChange={handleSecond10} row  defaultValue="top">
                <FormLabel class="FormLabel" id="If so, it is visible and easy to access" row component="legend">If so, it is visible and easy to access</FormLabel>
                <FormControlLabel

                  value="Strongly Agree
    "
                  control={<Radio color="primary" tabindex="0" />}
                  label="Strongly Agree"
                  labelPlacement="top"
                />
                <FormControlLabel
                  value="Agree"
                  control={<Radio color="primary" tabindex="-1" />}
                  label="Agree"
                  labelPlacement="top"
                />
                <FormControlLabel
                  value="Neutral"
                  control={<Radio color="primary" tabindex="-1" />}
                  label="Neutral"
                  labelPlacement="top"
                />
                <FormControlLabel
                  value="Disagree"
                  control={<Radio color="primary" tabindex="-1" />}
                  label="Disagree"
                  labelPlacement="top" />

                <FormControlLabel
                  value="Strongly Disagree"
                  control={<Radio color="primary" tabindex="-1" />}
                  label="Strongly Disagree"
                  labelPlacement="top" />
              </RadioGroup>



              <RadioGroup onChange={handleThird10} class="FormControl" row  defaultValue="top">
                <FormLabel class="FormLabel" id="The help section is aimed at solving problems" row component="legend">The help section is aimed at solving problems</FormLabel>
                <FormControlLabel

                  value="Strongly Agree
    "
                  control={<Radio color="primary" tabindex="0" />}
                  label="Strongly Agree"
                  labelPlacement="top"
                />
                <FormControlLabel
                  value="Agree"
                  control={<Radio color="primary" tabindex="-1" />}
                  label="Agree"
                  labelPlacement="top"
                />
                <FormControlLabel
                  value="Neutral"
                  control={<Radio color="primary" tabindex="-1" />}
                  label="Neutral"
                  labelPlacement="top"
                />
                <FormControlLabel
                  value="Disagree"
                  control={<Radio color="primary" tabindex="-1" />}
                  label="Disagree"
                  labelPlacement="top" />

                <FormControlLabel
                  value="Strongly Disagree"
                  control={<Radio color="primary" tabindex="-1" />}
                  label="Strongly Disagree"
                  labelPlacement="top" />
              </RadioGroup>



              <RadioGroup class="FormControl" row  name="position" defaultValue="top">
                <FormLabel class="FormLabel" id="There is a section on frequently asked questions
(FAQ)" name="position" row component="legend">There is a section on frequently asked questions
                  (FAQ)</FormLabel>
                <FormControlLabel

                  value="Strongly Agree
    "
                  control={<Radio color="primary" tabindex="0" />}
                  label="Strongly Agree"
                  labelPlacement="top"
                />
                <FormControlLabel
                  value="Agree"
                  control={<Radio color="primary" tabindex="-1" />}
                  label="Agree"
                  labelPlacement="top"
                />
                <FormControlLabel
                  value="Neutral"
                  control={<Radio color="primary" tabindex="-1" />}
                  label="Neutral"
                  labelPlacement="top"
                />
                <FormControlLabel
                  value="Disagree"
                  control={<Radio color="primary" tabindex="-1" />}
                  label="Disagree"
                  labelPlacement="top" />

                <FormControlLabel
                  value="Strongly Disagree"
                  control={<Radio color="primary" tabindex="-1" />}
                  label="Strongly Disagree"
                  labelPlacement="top" />
              </RadioGroup>

{/*
              <RadioGroup class="FormControl" onChange={handleFive10} row defaultValue="top">
                <FormLabel class="FormLabel" row component="legend" id="The help documentation is clear, with examples">The help documentation is clear, with examples</FormLabel>
                <FormControlLabel

                  value="Strongly Agree
    "
                  control={<Radio color="primary" tabindex="0" />}
                  label="Strongly Agree"
                  labelPlacement="top"
                />
                <FormControlLabel
                  value="Agree"
                  control={<Radio color="primary" tabindex="-1" />}
                  label="Agree"
                  labelPlacement="top"
                />
                <FormControlLabel
                  value="Neutral"
                  control={<Radio color="primary" tabindex="-1" />}
                  label="Neutral"
                  labelPlacement="top"
                />
                <FormControlLabel
                  value="Disagree"
                  control={<Radio color="primary" tabindex="-1" />}
                  label="Disagree"
                  labelPlacement="top" />

                <FormControlLabel
                  value="Strongly Disagree"
                  control={<Radio color="primary" tabindex="-1" />}
                  label="Strongly Disagree"
                  labelPlacement="top" />
              </RadioGroup>
*/}




            </div>



          </FormControl>


        </div>
        <Button
          //className={classes.button}
          variant="contained"
          color="primary"
          type="submit"
        //  aria-label="confirm"

          /*  onClick={() => this.handlesubmit({ 
              id: uuidv4(),
              title: title,
              inputFields : inputFields,
              keyword: keyword,
              abstract:  abstract, })}
             */

          onClick={handleSubmit}

        >Confirm</Button>
</main>
      </div>
      <div>
        <p>F. Santiago, M. Kevin Alonso, P. Maykol, A. David, R. Quispe, “Heuristic Evaluation of Peruvian Government Web Portals, used within the State of Emergency” 2021.</p>
      </div>
      
    </div>
  )
}

export default Questionnaire
