function searchNameViaPhoneNumber(phone, names) {
    let search = [];
    for (var key in names) {
        if (names[key].includes(phone)) {
            search.push(key);
        }
    }
    console.log(search);
    let sortedArray = search.sort();
    searchName = sortedArray[0];
    console.log(searchName);
}

names = {
    "Divya": "+91-9911369753",
    "Ravi": "+91-8527389170",
    "Dipanshu": "+91-9911369733"
}

searchNameViaPhoneNumber("9911", names);