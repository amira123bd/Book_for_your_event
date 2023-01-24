export default function getRoomTypeString(roomType: number) {
  switch (roomType) {
    case 1:
      return "Individual Room";
    case 2:
      return "Two people Room";
    case 3:
      return "Three people Room";
    default:
      return "Three people Room";
  }
}
