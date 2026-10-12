import homePage from '../support/pages/HomePage'
import categoryMenu from '../support/pages/CategoryMenu'
import practiceFormPage from '../support/pages/PracticeFormPage'

describe('Practice Form', () => {
  it('submits the form with valid student data', () => {
    cy.fixture('practice-form-student').then((student) => {
      homePage.visit().openCard('Elements')
      categoryMenu.openGroup('Forms').openItem('Practice Form')

      practiceFormPage
        .fillPersonalInfo(student)
        .fillBirthDate(student)
        .selectSubject(student.subject)
        .selectHobby(student.hobbyIndex)
        .uploadPicture(student.picturePath)
        .fillAddress(student)
        .submit()
    })
  })
})
