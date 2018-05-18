$(() => {
  $input = $('#date-input');
  $result = $('#result');
  $clear = $('#clear');
  
  $input
  .on('focus', (e) => {
    $(e.currentTarget).select();
  })
  .on('input', (e) => {
    const rawInput = e.currentTarget.value.trim();
    const input = rawInput.replace(/[^\d]/g, '');

    $result.append($(`<li>${new Date(parseInt(input))} : ${input}</li>`));
  });
  
  $clear
  .on('click', (e) => {
    $input.val('');
    $result.empty();
  });
  
  $('#input-date').daterangepicker({
    singleDatePicker: true,
    timePicker: true,
    timePicker24Hour: true,
    timePickerSeconds: true,
    showDropdowns: true,
    minYear: 2015,
    locale: {
      format: 'DD-MM-YYYY HH:mm:ss'
    },
    startDate: moment().format('DD-MM-YYYY HH:mm:ss')
  }, (start) => {
    $('#date-right-1').text(start.valueOf());
  });
  
  const startDate2 = moment.utc(`${moment().subtract(5, 'hours').subtract(30, 'minutes').format('DD-MM-YYYY HH:mm:ss')} +0000`, 'DD-MM-YYYY HH:mm:ss ZZ').format('DD-MM-YYYY HH:mm:ss');
  $('#input-date-2').daterangepicker({
    singleDatePicker: true,
    timePicker: true,
    timePicker24Hour: true,
    timePickerSeconds: true,
    showDropdowns: true,
    minYear: 2015,
    locale: {
      format: 'DD-MM-YYYY HH:mm:ss'
    },
    startDate: startDate2
  }, (start) => {
    const sourceTimestamp = moment.utc(`${start.format('DD-MM-YYYY HH:mm:ss')} +0000`, 'DD-MM-YYYY HH:mm:ss ZZ').valueOf();
    const targetDateTime = moment.utc(sourceTimestamp).utcOffset('+05:30');
    const targetDateTimeStr = targetDateTime.format('DD-MM-YYYY HH:mm:ss');
    $('#date-right-2').html(`${targetDateTimeStr}<br \>${targetDateTime.valueOf()}`);
  });
  
  $('#input-date-3').daterangepicker({
    singleDatePicker: true,
    timePicker: true,
    timePicker24Hour: true,
    timePickerSeconds: true,
    showDropdowns: true,
    minYear: 2015,
    locale: {
      format: 'DD-MM-YYYY HH:mm:ss'
    },
    startDate: moment().format('DD-MM-YYYY HH:mm:ss')
  }, (start) => {
    const sourceTimestamp = moment.utc(`${start.format('DD-MM-YYYY HH:mm:ss')} +05:30`, 'DD-MM-YYYY HH:mm:ss ZZ').valueOf();
    const targetDateTime = moment.utc(sourceTimestamp).utcOffset('+0000');
    const targetDateTimeStr = targetDateTime.format('DD-MM-YYYY HH:mm:ss');
    $('#date-right-3').html(`${targetDateTimeStr}<br \>${targetDateTime.valueOf()}`);
  });
});
