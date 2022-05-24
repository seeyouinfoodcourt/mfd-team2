import { mount } from '@vue/test-utils'
import RecipeAuthor from '@/components/recipe/RecipeAuthor.vue'

describe("RecipeAuthor.vue", () => {
  it("renders username", () => {
    const author = {
      id: 12,
      attributes: {
        username: "Alessandra Blair",
        email: "alessandra@alessandra.dk",
        provider: "local",
        confirmed: true,
        blocked: false,
        createdAt: "2022-05-11T14:06:42.490Z",
        updatedAt: "2022-05-18T15:51:27.417Z",
      },
    };
    const wrapper = mount(RecipeAuthor, {
      props: { author },
    });
    expect(wrapper.text()).toContain(author.attributes.username);
  });
});