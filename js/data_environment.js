data_environment_obscurance = [
    {
        title: "가볍게 가려진 지역/Lightly obscured",
        icon: "bleeding-eye",
        subtitle: "",
        description: "약한 빛이나 옅은 안개, 혹은 나뭇잎새 등",
        reference: "PHB, pg. 183.",
        bullets: [
            "캐릭터들은 <b>시각에 의존한 지혜(감지) 판정을 할 때 불리점</b>을 받게 됩니다."
        ]
    },
    {
        title: "심하게 가려진 지역/Heavily obscured",
        icon: "lightning-tear",
        subtitle: "Effectively blind",
        description: "완전한 어둠이나 짙은 안개, 빽빽한 숲 등",
        reference: "PHB, pg. 183.",
        bullets: [
            "심하게 가려진 지역에 있는 캐릭터는 실질적으로 <b>장님 상태</b>와 마찬가지의 영향을 받게 됩니다.",
            "마찬가지로 밖에서 심하게 가려진 지역 안에 있는 대상을 보려 할 때도 실질적으로 <b>장님 상태</b>인 것처럼 취급합니다."
        ]
    }
]

data_environment_light = [
    {
        title: "밝은 빛/Bright light",
        icon: "star-pupil",
        subtitle: "정상적인 시야",
        description: "대부분의 크리쳐들이 정상적으로 볼수 있는 환경입니다.",
        reference: "PHB, pg. 183.",
        bullets: [
            "흐린 날이라도 해가 떠 있으면 밝은 빛 아래에 있는 것으로 취급합니다.",
            "횃불이나 랜턴, 불, 기타 다른 조명은 특정한 범위까지에 밝은 빛을 비춥니다."
        ]
    },
    {
        title: "약한 빛/Dim light",
        icon: "semi-closed-eye",
        subtitle: "가볍게 가려진 지역",
        description: "그림자, 혹은 흐릿한 빛",
        reference: "PHB, pg. 183.",
        bullets: [
            "<b>가볍게 가려진 지역</b>을 만듭니다.",
            "약한 빛이 있는 지역은 대개 밝은 빛 지역의 가장자리인 경우가 많습니다.",
            "황혼이나 새벽의 희미한 빛 역시 약한 빛으로 취급합니다. 특별히 밝은 보름달 아래 역시 지면에 약한 빛을 비출 수 있습니다."
        ]
    },
    {
        title: "어둠/Darkness",
        icon: "worried-eyes",
        subtitle: "심하게 가려진 지역",
        description: "심하게 가려진 지역을 만듭니다.",
        reference: "PHB, pg. 183.",
        bullets: [
            "<b>심하게 가려진 지역</b>을 만듭니다.",
            "한밤중에 야외에 있는 캐릭터들은 어둠 속에 있는 것으로 취급합니다. (대개 달이 떠 있다 해도 그렇습니다.)",
            "또한 빛이 전혀 들어오지 않는 던전이나 지하 금고 같은 지역도 마찬가지이며, 마법적으로 어둠이 생성된 지역 역시 이런 환경에 해당합니다."
        ]
    }
]

data_environment_vision = [
    {
        title: "맹안시야/Blindsight",
        icon: "one-eyed",
        subtitle: "시각에 의존하지 않고 파악",
        description: "맹안시야를 가진 크리쳐는 일정 범위까지의 주변 환경을 시각에 의존하지 않고 파악할 수 있습니다. ",
        reference: "PHB, pg. 183.",
        bullets: [
            "점액류 등의 눈이 없는 크리쳐나 소리의 반향으로 위치를 파악하는 크리쳐, 혹은 드래곤처럼 지극히 예민한 감각을 가진 크리쳐는 이 특수 감각을 지니고 있습니다."
        ]
    },
    {
        title: "암시야/Darkvision",
        icon: "semi-closed-eye",
        subtitle: "Limited vision in darkness",
        description: "암시야를 지닌 크리쳐는 어둠 속에서도 일정 범위까지를 약한 빛 환경처럼 볼 수 있습니다.",
        reference: "PHB, pgs. 183-184.",
        bullets: [
            "암시야를 지닌 크리쳐는 어둠 속에서도 일정 범위까지를 약한 빛 환경처럼 볼 수 있으며, 따라서 해당 지역은 가볍게 가려진 상태로 취급합니다.",
            "하지만, 암시야로는 어둠 속에서 색을 구별할 수 없으며, 오로지 회색의 음영으로만 보입니다.",
            "D&D 세계에서는 많은 크리쳐들, 특히 지하에 사는 크리쳐들이 암시야를 지니고 있습니다. "
        ]
    },
    {
        title: "진시야/Truesight",
        icon: "eye-shield",
        subtitle: "See in darkness",
        description: "A creature with truesight can see everything in its true form, independent of the environment",
        reference: "PHB, pg. 184.",
        bullets: [
            "진시야를 지닌 크리쳐는 특정 범위까지의 모든 일반적이거나 마법적인 어둠을 무시하고 볼 수 있으며, 투명한 크리쳐나 물체를 볼 수 있고, 내성 굴림에 성공한 것처럼 자동적으로 시각적 환영을 간파하며, 변신체의 원래 모습을 감지하고 마법으로 변형된 존재 역시 파악할 수 있습니다. ",
            "이에 더해, 진시야를 지니고 있으면 주변 에테르계의 모습 역시 볼 수 있습니다."
        ]
    }
]

data_environment_cover = [
    {
        title: "절반 엄폐/Half cover",
        icon: "broken-shield",
        subtitle: "AC와 민첩 내성 굴림에 +2 보너스",
        description: "절반 엄폐가 있는 목표는 자기 몸의 반 정도를 가리는 엄폐물로 보호받고 있는 것입니다.",
        reference: "PHB, pg. 196.",
        bullets: [
            "이 장애물은 낮은 벽이거나 커다란 가구의 일부, 혹은 좁은 나무 등걸이나 다른 크리쳐 등일 수 있습니다. ",
            "절반 엄폐를 받는 대상은 AC와 민첩 내성 굴림에 +2 보너스를 받습니다.",
            "만약 목표가 여러 가지 엄폐물에서 엄폐를 받고 있다면, 그중 가장 높은 단계의 방어를 제공하는 엄폐만을 적용합니다."
        ]
    },
    {
        title: "3/4 엄폐/Three-quarters cover",
        icon: "cracked-shield",
        subtitle: "AC와 민첩 내성 굴림에 +5 보너스",
        description: "3/4 엄폐가 있는 목표는 자기 몸의 3/4 정도를 가리는 엄폐물로 보호받고 있는 것입니다.",
        reference: "PHB, pg. 196.",
        bullets: [
            "이러한 장애물로는 창살문이나 화살 총안, 혹은 두꺼운 나무 등걸 등이 있습니다.",
            "3/4 엄폐를 받는 대상은 AC와 민첩 내성 굴림에 +5 보너스를 받습니다.",
            "만약 목표가 여러 가지 엄폐물에서 엄폐를 받고 있다면, 그중 가장 높은 단계의 방어를 제공하는 엄폐만을 적용합니다."
        ]
    },
    {
        title: "완전 엄폐/Full cover",
        icon: "shield",
        subtitle: "직접적인 공격이나 주문의 목표가 될 수 없습니다.",
        description: "완전 엄폐를 가진 목표는 장애물로 완전히 가려져 있는 것입니다.",
        reference: "PHB, pg. 196.",
        bullets: [
            "완전 엄폐를 받는 대상은 직접적인 공격이나 주문의 목표가 될 수 없지만, 몇몇 주문들은 효과 범위를 통해 엄폐물 뒤의 목표에게도 영향을 줄 수 있습니다.",
            "만약 목표가 여러 가지 엄폐물에서 엄폐를 받고 있다면, 그중 가장 높은 단계의 방어를 제공하는 엄폐만을 적용합니다."
        ]
    }
]
