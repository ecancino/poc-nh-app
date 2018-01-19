import React from 'react'
import { Field } from 'redux-form'
import { Form, Button } from 'semantic-ui-react'

import TextField from '../../components/TextField';
import SelectField from '../../components/SelectField';
import DatePicker from '../../components/DatePicker';
import Check from '../../components/Check';

const Biopic = ({ handleSubmit, pristine, reset, submitting, countries, types, saveBiopic }) => (
  <Form onSubmit={handleSubmit(saveBiopic)}>
    <Form.Group widths='equal'>
      <Form.Field>
        <label htmlFor='title'>Title</label>
        <Field name='title' id='form-input-control-title' component={TextField} placeholder='Title' icon='header' />
      </Form.Field>
      <Form.Field>
        <label htmlFor='subject'>Subject</label>
        <Field name='subject' component={TextField} placeholder='Subject' icon='user' />
      </Form.Field>
    </Form.Group>
    <Form.Group widths='equal'>
      <Form.Field>
        <label htmlFor='director'>Director</label>
        <Field name='director' component={TextField} placeholder='Director' icon='film' />
      </Form.Field>
      <Form.Field>
        <label htmlFor='year_release'>Release</label>
        <Field name='year_release' component={DatePicker} type='text' placeholder='Release' icon='calendar'/>
      </Form.Field>
    </Form.Group>
    <Form.Group widths='equal'>
      <Form.Field>
        <label htmlFor='type'>Type</label>
        <Field name='type' component={SelectField} options={types} placeholder='Type' />
      </Form.Field>
      <Form.Field>
        <label htmlFor='country'>Country</label>
        <Field name='country' component={SelectField} options={countries} placeholder='Country' />
      </Form.Field>
    </Form.Group>
    <Form.Group widths='equal'>
      <Form.Field>
        <label htmlFor='lead_actor'>Lead</label>
        <Field name='lead_actor' component={TextField} placeholder='Lead' icon='star' />
      </Form.Field>
      <Form.Field>
        <label htmlFor='site'>Site</label>
        <Field name='site' component={TextField} placeholder='Site' icon='chrome' />
      </Form.Field>
    </Form.Group>
    <Form.Group widths='equal'>
      <Form.Field>
        <label htmlFor='active'>Active</label>
        <Field name='active' component={Check} toggle format={Boolean} placeholder='Active' />
      </Form.Field>
      <Form.Field>
        <Button type='submit' primary icon='save' content='Save' disabled={pristine || submitting} floated='right' tabIndex='0' />
        <Button type='button' icon='undo' content='Reset' onClick={reset} disabled={pristine || submitting} floated='right' tabIndex='0' />
      </Form.Field>
    </Form.Group>
  </Form>
)

export default Biopic
