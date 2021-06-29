import React from 'react';
import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  Paper,
  Select,
  TextField,
} from '@material-ui/core';

function SelectForm(): React.FunctionComponentElement<React.ReactNode> {
  return (
    <Grid container direction='column' spacing={1}>
      <Grid item xs={12}>
        <Grid container justify='space-between' alignItems='center' spacing={1}>
          <Grid item xs={2}>
            <FormControl fullWidth size='small' variant='outlined'>
              <InputLabel htmlFor='outlined-age-native-simple'>
                Select Metric
              </InputLabel>
              <Select
                fullWidth
                native
                label='Select Metric'
                inputProps={{
                  name: 'age',
                  id: 'outlined-age-native-simple',
                }}
              >
                <option aria-label='None' value='' />
                <option value={10}>actor_loss</option>
                <option value={20}>agg_metric</option>
                <option value={30}>critic_loss</option>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={9}>
            <TextField
              fullWidth
              size='small'
              variant='outlined'
              placeholder='Metric expression'
            />
          </Grid>
          <Grid item xs={1}>
            <Button size='small' variant='outlined'>
              +
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={1} justify='space-between' alignItems='center'>
          <Grid xs={2} item>
            <Paper variant='outlined'>Run</Paper>
          </Grid>
          <Grid xs={10} item>
            <TextField
              fullWidth
              size='small'
              variant='outlined'
              placeholder='Run expression'
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default React.memo(SelectForm);
