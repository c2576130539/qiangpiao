import Seats from 'seats/seats'
import Qrcode from 'qrcode/qrcode'

export default function () {
  return {
    $wuxQrcode: Qrcode, 
    $wuxSeats: Seats,
  }
}