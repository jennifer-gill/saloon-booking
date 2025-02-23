document.addEventListener('DOMContentLoaded', () => {
  const seatContainer = document.getElementById('seatContainer');
  const totalSeats = 10; // Change as needed

  function createSeats() {
    for (let i = 1; i <= totalSeats; i++) {
      const seat = document.createElement('div');
      seat.classList.add('seat');
      seat.dataset.seatNumber = i;

      const label = document.createElement('span');
      label.innerText = `Seat ${i}`;
      seat.appendChild(label);

      seat.addEventListener('click', toggleSeat);

      seatContainer.appendChild(seat);
    }
  }

  function toggleSeat(event) {
    const seat = event.currentTarget;
    if (seat.classList.contains('booked')) {
      seat.classList.remove('booked');
      seat.querySelector('span').innerText = `Seat ${seat.dataset.seatNumber}`;
      alert(`Seat ${seat.dataset.seatNumber} unbooked successfully!`);
    } else {
      seat.classList.add('booked');
      seat.querySelector('span').innerText = 'Booked';
      alert(`Seat ${seat.dataset.seatNumber} booked successfully!`);

      // setTimeout(() => {
      //   seat.classList.remove('booked');
      //   seat.querySelector('span').innerText = `Seat ${seat.dataset.seatNumber}`;
      //   alert(`Seat ${seat.dataset.seatNumber} unbooked successfully!`);
      // }, 5000);

    }

  }

  createSeats();
});
