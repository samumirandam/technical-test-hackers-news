import React from "react";
import { render, screen } from "@utils/test-utils";

import Home from "../index";

const defaultProps = {
  storyList: {
    data: {
      hits: [
        {
          created_at: "2022-08-26T00:27:26.000Z",
          title: null,
          url: null,
          author: "didericis",
          points: null,
          story_text: null,
          comment_text:
            "Nuclear’s expense is almost entirely artificial&#x2F;regulatory in nature, think simpler and safer modern reactor designs reduce a lot of the expense.<p>The construction and maintenance and integration of nuclear waste storage facilities is also much simpler and more proven than the construction and maintenance and integration of battery farms on the scale needed to meet grid demands.",
          num_comments: null,
          story_id: 32581402,
          story_title:
            "Threats of Blackouts Drive Japan to Embrace Nuclear Again",
          story_url:
            "https://financialpost.com/pmn/business-pmn/threats-of-blackouts-drive-japan-to-embrace-nuclear-again",
          parent_id: 32583884,
          created_at_i: 1661473646,
          _tags: ["comment", "author_didericis", "story_32581402"],
          objectID: "32601835",
          _highlightResult: {
            author: {
              value: "didericis",
              matchLevel: "none",
              matchedWords: [],
            },
            comment_text: {
              value:
                "Nuclear’s expense is almost entirely artificial/regulatory in nature, think simpler and safer modern <em>reactor</em> designs reduce a lot of the expense.<p>The construction and maintenance and integration of nuclear waste storage facilities is also much simpler and more proven than the construction and maintenance and integration of battery farms on the scale needed to meet grid demands.",
              matchLevel: "full",
              fullyHighlighted: false,
              matchedWords: ["reactjs"],
            },
            story_title: {
              value:
                "Threats of Blackouts Drive Japan to Embrace Nuclear Again",
              matchLevel: "none",
              matchedWords: [],
            },
            story_url: {
              value:
                "https://financialpost.com/pmn/business-pmn/threats-of-blackouts-drive-japan-to-embrace-nuclear-again",
              matchLevel: "none",
              matchedWords: [],
            },
          },
        },
      ],
    },
  },
};

const setup = (properties = {}) => {
  const setupStore = { ...defaultProps, ...properties };
  return render(<Home {...setupStore} />, {});
};

describe("Test for Home page component", () => {
  test("Should render without errors", () => {
    setup();
    expect(screen.getByTestId("Home")).toBeTruthy();
  });

  test("Should renders the same component", () => {
    const { container } = setup();
    expect(container).toMatchSnapshot();
  });
});
