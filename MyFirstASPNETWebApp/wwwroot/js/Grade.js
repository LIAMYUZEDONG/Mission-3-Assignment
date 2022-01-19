$("#btnSend").click(function () {


    var total = ($("#AssignmentScore").val() * 0.55) +
        ($("#GroupProjectScore").val() * 0.05) +
        ($("#QuizzesScore").val() * 0.1) +
        ($("#ExamsScore").val() * 0.2) +
        ($("#INTEXScore").val() * 0.1)



    if (total >= 94)
        (
            alert("Total %: " + total + "                  " + "Letter_Grade: A")
        )

    else if (total >= 90)
        (
            alert("Total %: " + total + "                  " + "Letter_Grade: A-")
        )
    else if (total >= 87)
        (
            alert("Total %: " + total + "                  " + "Letter_Grade: B+")
        )

    else if (total >= 84)
        (
            alert("Total %: " + total + "                  " + "Letter_Grade: B")
        )
    else if (total >= 80)
        (
            alert("Total %: " + total + "                  " + "Letter_Grade: B-")
        )
    else if (total >= 77)
        (
            alert("Total %: " + total + "                  " + "Letter_Grade: C+")
        )
    else if (total >= 74)
        (
            alert("Total %: " + total + "                  " + "Letter_Grade: C")
        )
    else if (total >= 70)
        (
            alert("Total %: " + total + "                  " + "Letter_Grade: C-")
        )
    else if (total >= 67)
        (
            alert("Total %: " + total + "                  " + "Letter_Grade: D+")
        )
    else if (total >= 64)
        (
            alert("Total %: " + total + "                  " + "Letter_Grade: D")
        )
    else if (total >= 60)
        (
            alert("Total %: " + total + "                  " + "Letter_Grade: D-")
        )
    else if (total < 60)
        (
            alert("Total %: " + total + "                  " + "Letter_Grade: E")
        )

    })
