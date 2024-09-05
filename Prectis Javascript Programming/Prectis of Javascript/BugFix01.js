
function showmarks(marks){
    // const message = marks || "Absent"
    const message = marks ?? "Absent"
    console.log(`Marks : ${message}`);
}

showmarks(90) // marls : 90
showmarks(0) // marks : 0
showmarks(null)// Absent
showmarks(undefined) // Absent